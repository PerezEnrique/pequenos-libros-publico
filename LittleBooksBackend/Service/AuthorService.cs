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

        public Author? Get(int id)
        {
            var response = repository.GetAuthor(id);
            if (response.Result.IsSuccess)
            {
                return response.Result.Value;
            }
            else
            {
                Console.WriteLine(response.Result.ErrorMessage);
                return null;
            }

        }
    }
}
