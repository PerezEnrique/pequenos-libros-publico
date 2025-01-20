using Dapper;
using LittleBooksBackend.Interface;
using LittleBooksBackend.Models;
using System.Data;

namespace LittleBooksBackend.Repository
{
    public class AuthorRepository : IAuthorRepository
    {
        private readonly IDbConnection _connetion;

        public AuthorRepository(IDbConnection connection)
        {
            _connetion = connection;
        }
        public async Task<ResultP<Author>> GetAuthor(int id)
        {
            var sql = "SELECT * FROM public.authors WHERE Id = @Id";
            var response = await _connetion.QuerySingleOrDefaultAsync<Author>(sql, new { Id = id });
            return response != null
                ? ResultP<Author>.Success(response)
                : ResultP<Author>.Failure("Dato no encontrado");
        }
    }
}
