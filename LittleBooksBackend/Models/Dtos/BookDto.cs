namespace LittleBooksBackend.Models.Dtos;

public class BookDto 
{
    public int Id { get; set; }
    public string Title {get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string ImageUrl { get; set; } = string.Empty;
    public ICollection<IdValueDto> Authors = [];
    public ICollection<IdValueDto> Genres = [];

    public BookDto(Book book)
    {
        Id = book.Id;
        Title = book.Title;
        Description = book.Description;
        ImageUrl = book.ImageUrl;
        Authors = [.. book.Authors.Select(author => new IdValueDto(author.Id, author.Name))];
        Genres = [.. book.Genres.Select(genre => new IdValueDto(genre.Id, genre.Name))];
    }
}