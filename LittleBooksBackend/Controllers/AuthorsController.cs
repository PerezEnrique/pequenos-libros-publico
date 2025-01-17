using Microsoft.AspNetCore.Mvc;

namespace LittleBooksBackend.Controllers;

[ApiController]
[Route("[controller]")]
public class AuthorsController : ControllerBase
{
    [HttpGet()]
    public IActionResult TestEndpoint()
    {
        return Ok("Hello from AuthorsController");
    }
}
