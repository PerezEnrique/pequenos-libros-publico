using LittleBooksBackend.Interface;
using LittleBooksBackend.Models;

namespace LittleBooksBackend.Repository
{
    public class AuthorRepository : IAuthorRepository
    {
        private readonly string _conn;
        public Author RepoTest()
        {
            return new Author();
        }
    }
}
