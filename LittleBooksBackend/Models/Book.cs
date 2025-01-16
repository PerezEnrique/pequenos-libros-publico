namespace LittleBooksBackend.Models;

public class Book 
{
    public int Id { get; set; }
    public string Title {get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string ImageUrl { get; set; } = string.Empty;
    public ICollection<Author> Authors = [];
    public ICollection<Genre> Genres = [];
}