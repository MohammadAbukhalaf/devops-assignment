using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("[controller]")]
public class WeatherController : ControllerBase
{
    [HttpGet]
    public IActionResult Get()
    {
        return Ok(new { TempC = 26, Summary = "Sunny" });
    }
}