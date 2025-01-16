using LittleBooksBackend.Interface;
using LittleBooksBackend.Models;

namespace LittleBooksBackend.Service
{
    public class AuthorService : IAuthorService
    {
        private readonly IAuthorRepository repository;

        public AuthorService(IAuthorRepository repository)
        {
            this.repository = repository;
        }

        public Author Test()
        {
            return repository.RepoTest();
        }
    }
}
