using LittleBooksBackend.Interface;
using Microsoft.AspNetCore.Mvc;

namespace LittleBooksBackend.Controllers;

[ApiController]
[Route("[controller]")]
public class AuthorsController : ControllerBase
{
    private readonly IAuthorService _authorService;

    public AuthorsController(IAuthorService authorService)
    {
        _authorService = authorService;
    }

    [HttpGet()]
    public IActionResult TestEndpoint()
    {
        var author = _authorService.Test();
        return Ok("Hello from AuthorsController");
    }
}
