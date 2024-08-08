using Hash.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApp.Dto;
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


        [HttpGet("GetAllUsersInAdmin")]
        public IEnumerable<User> GetAllUsersInAdmin()
        {
            return (context.Users.ToList());
        }

        [HttpGet("GetAllBookingsInAdmin")]
        public IEnumerable<Booking> GetAllBookingsInAdmin()
        {
            return context.Bookings.ToList();
        }

        /*[HttpGet("GetAllBookingsInAdmin")]
        public async Task<IActionResult> Index()
        {
            
            var booking = await context.Bookings.ToListAsync();

            return Ok(booking);
        }*/



        // POST api/<AdminController>
        [HttpPut("EditCost/{id}")]
        public string Edit(int id, [FromBody] CostRequestDto costRequest)
        {
            /*Cost costToBeEdited = (Cost)context.Costs.Where(c => c.CostId == 1);
            Console.WriteLine(costToBeEdited);*/

            Cost costToBeEdited = context.Costs.Find(id);

            if (costToBeEdited == null)
            {
                return ("Right now, can't update");
            }

            costToBeEdited.ParkingCostPerHourBike = costRequest.ParkingCostPerHourBike;

            costToBeEdited.ParkingCostPerHourCar = costRequest.ParkingCostPerHourCar;

            context.SaveChanges();

            return ("Cost updated");

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
