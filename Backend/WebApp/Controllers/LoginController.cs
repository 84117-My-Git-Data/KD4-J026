using Hash.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using WebApp.Dto;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        IConfiguration _config;

        hashparkingDBContext context = null;
        public LoginController(IConfiguration config, hashparkingDBContext _context)
        {
            _config = config;
            context = _context;
        }

        [HttpPost("userlogin")]
        public IActionResult Login([FromBody] LoginRequestDto loginRequest)
        {

            var user = context.Users.Where(u => u.Email == loginRequest.Email).FirstOrDefault();

            if (user != null)
            {

                var userPassword = context.Users.Where(u => u.Password == loginRequest.Password).FirstOrDefault();

                if (userPassword != null)
                {
                    var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
                    var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

                    var Sectoken = new JwtSecurityToken(_config["Jwt:Issuer"],
                      _config["Jwt:Issuer"],
                      null,
                      expires: DateTime.Now.AddMinutes(120),
                      signingCredentials: credentials);

                    var token = new JwtSecurityTokenHandler().WriteToken(Sectoken);

                    var value = new { name = user.FirstName, token };

                    return base.Ok(value);

                    

                }
                else
                {
                    return Ok("Invalid Password...");
                }

            }
            else
            {
                return Ok("Invalid Email...");
            }
        }
    }
}
