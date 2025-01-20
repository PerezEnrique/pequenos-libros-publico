using LittleBooksBackend.Models;

namespace LittleBooksBackend.Interface
{
    public interface IAuthorRepository
    {
        public Task<ResultP<Author>> GetAuthor(int id);
    }
}
