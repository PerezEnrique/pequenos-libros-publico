using LittleBooksBackend.Models;

namespace LittleBooksBackend.Interface
{
    public interface IAuthorService
    {
        public Task<Author> Get(int id);
    }
}
