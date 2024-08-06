using Hash.Models;
using Microsoft.AspNetCore.Mvc;
using WebApp.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        hashparkingDBContext context = null;

        public AdminController(hashparkingDBContext _context)
        {
            context = _context;
        }

        // GET: api/<AdminController>
        [HttpGet("GetAllUsersInAdmin")]
        public IEnumerable<User> GetAllUsersInAdmin()
        {
            return (context.Users.ToList());
        }

        [HttpGet("GetAllBookingsInAdmin")]
        public IEnumerable<Booking> GetAllBookingsInAdmin()
        {
            return (context.Bookings.ToList());
        }

        // GET api/<AdminController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<AdminController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<AdminController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<AdminController>/5
        [HttpDelete("DeleteUserInAdmin/{UserId}")]
        public String DeleteUserInAdmin(int? UserId)
        {
            User user = context.Users.Find(UserId);

            if (user != null)
            {
                context.Users.Remove(user);

                context.SaveChanges();

                return "User deleted successfully...";
            }
            else
            {

                return "User doesn't exist...";
            }
        }
    }
}
