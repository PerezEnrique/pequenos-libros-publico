using System.Data;
using Dapper;
using LittleBooksBackend.Interface;
using LittleBooksBackend.Models;
using LittleBooksBackend.Models.Dtos;
using Npgsql;

namespace LittleBooksBackend.Service;

public class BookService : IBookService
{
    private readonly string? _connectionString;

    public BookService(IConfiguration config)
    {
        _connectionString = config.GetConnectionString("Default");
    }

    public async Task<IEnumerable<BookDto>> FindByGenre(string genre)
    {
        if(string.IsNullOrWhiteSpace(_connectionString))
            throw new Exception("Connection string is null");

        using var connection = new NpgsqlConnection(_connectionString);
        
        // var sql = "select * from search_books_by_genre(@genre);";

        var sql = @"SELECT b.""id"", b.""title"", a.""name"", b.""year"", g.""name"", b.""description""
	        FROM ""books"" b
	        JOIN ""books_authors"" ba ON b.""id"" = ba.""book_id""
	        JOIN ""authors"" a ON ba.""author_id"" = a.""id""
			JOIN ""books_genres"" bg ON b.""id"" = bg.""book_id""
			JOIN ""genres"" g ON bg.""genre_id"" = g.""id""
			WHERE
	            LOWER(g.""name"") LIKE '%' || LOWER(@genre) || '%';";

        IEnumerable<Book> queryResult = await connection.QueryAsync<Book, Author, Genre, Book>(
            sql, 
            (book, author, genre) => {
                book.Authors.Add(author);
                book.Genres.Add(genre);
                return book;
            },
            new { genre },
            splitOn: "id"
            );

            IEnumerable<Book> resultWithoutDuplicates = GetResultWithoutDuplicates(queryResult);

            return resultWithoutDuplicates.Select(book => new BookDto(book));
    }

    private IEnumerable<Book> GetResultWithoutDuplicates(IEnumerable<Book> result)
    {
        IEnumerable<IGrouping<int, Book>>? groupedDuplicates = result.GroupBy(book => book.Id);
                     
        return groupedDuplicates.Select(groupOfDuplicates => {
            Book bookToReturn = groupOfDuplicates.First(); //Agarramos uno de los libros duplicados, cualquier sirve.

            //Cara libro duplicado tiene un autor distinto. Acá los reunimos todos y lo pasamos al libro que vamos a devolver
            foreach (Book duplicate in groupOfDuplicates)
            {
                if(duplicate.Authors.Count > 0)
                {
                    Author currentAuthor = duplicate.Authors.Single();

                    bool isAuthorInCollection = bookToReturn.Authors.Any(author => author.Id == currentAuthor.Id);

                    if(!isAuthorInCollection)
                        bookToReturn.Authors.Add(currentAuthor);
                }
            }

            //Cara libro duplicado tiene un genero distinto. Acá los reunimos todos y lo pasamos al libro que vamos a devolver
            foreach (Book duplicate in groupOfDuplicates)
            {
                if(duplicate.Genres.Count > 0)
                {
                    Genre currentGenre = duplicate.Genres.Single();

                    bool isGenreInCollection = bookToReturn.Genres.Any(genre => genre.Id == currentGenre.Id);

                    if(!isGenreInCollection)
                        bookToReturn.Genres.Add(currentGenre);
                }
            }

            return bookToReturn;
        });
    }
}

