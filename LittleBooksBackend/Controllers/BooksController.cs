using LittleBooksBackend.Interface;
using LittleBooksBackend.Models.Dtos;
using Microsoft.AspNetCore.Mvc;

namespace LittleBooksBackend.Controllers;

[ApiController]
[Route("[controller]")]
public class BooksController : ControllerBase
{
    private readonly IBookService _bookService;
    public BooksController(IBookService bookService)
    {
        _bookService = bookService;
    }

    [HttpGet("by-genre/{genre}")]
    public async Task<ActionResult<IEnumerable<BookDto>>> FindByGenre(string genre)
    {
        try
        {
            return Ok(await _bookService.FindByGenre(genre));
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex);
            return Problem(statusCode: StatusCodes.Status500InternalServerError);
        }
    }
}