using Hash.Models;
using Microsoft.AspNetCore.Mvc;
using WebApp.Models;



// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860
namespace WebApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookingController : ControllerBase
    {
        private hashparkingDBContext _Context = null;

        public BookingController(hashparkingDBContext context)
        {
            _Context = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Booking>> Get()
        {
            var bookings = _Context.Bookings.ToList();
            if (bookings == null || !bookings.Any())
            {
                return NotFound("No bookings found.");
            }
            return Ok(bookings);
        }

        [HttpGet("{id}")]
        public ActionResult<Booking> Get(int id)
        {
            var booking = _Context.Bookings.Find(id);
            if (booking == null)
            {
                return NotFound($"Booking with ID {id} not found.");
            }
            return Ok(booking);
        }

        [HttpPost("create")]
        public ActionResult<Booking> Create([FromBody] Booking booking)
        {
            if (booking == null)
            {
                return BadRequest("Booking data is null.");
            }


            switch (booking.VehicleType)
            {
                case 1:
                    booking.ParkingCostPerHour = 10;
                    break;
                case 2:
                    booking.ParkingCostPerHour = 5;
                    break;
                default:
                    return BadRequest("Invalid vehicle type.");
            }

            var existingBookings = _Context.Bookings
                .Where(b => b.Date == booking.Date &&
                            b.StartTime < booking.EndTime &&
                            b.EndTime > booking.StartTime)
                .ToList();

            int totalBookedSlots = existingBookings.Sum(b => b.Slots);
            int totalSlotsNeeded = booking.Slots;
            int totalParkingSlots = 100;
            int availableSlots = totalParkingSlots - totalBookedSlots;

            if (availableSlots < totalSlotsNeeded)
            {
                return BadRequest("Not enough slots available.");
            }

            booking.TotalCost = (booking.EndTime - booking.StartTime).TotalHours * booking.ParkingCostPerHour;

            _Context.Bookings.Add(booking);
            _Context.SaveChanges();

            return CreatedAtAction(nameof(Get), new { id = booking.BookingId }, booking);
        }

        [HttpPut("{id}")]
        public ActionResult Update(int id, [FromBody] Booking booking)
        {
            if (booking == null)
            {
                return BadRequest("Booking data is null.");
            }

            var existingBooking = _Context.Bookings.Find(id);
            if (existingBooking == null)
            {
                return NotFound($"Booking with ID {id} not found.");
            }

            existingBooking.VehicleNumber = booking.VehicleNumber;
            existingBooking.Date = booking.Date;
            existingBooking.ParkingCostPerHour = booking.ParkingCostPerHour;
            existingBooking.VehicleType = booking.VehicleType;
            existingBooking.StartTime = booking.StartTime;
            existingBooking.EndTime = booking.EndTime;
            existingBooking.Slots = booking.Slots;
            existingBooking.TotalCost = (booking.EndTime - booking.StartTime).TotalHours * booking.ParkingCostPerHour;

            _Context.SaveChanges();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var bookingToDelete = _Context.Bookings.Find(id);
            if (bookingToDelete == null)
            {
                return NotFound($"Booking with ID {id} not found.");
            }

            _Context.Bookings.Remove(bookingToDelete);
            _Context.SaveChanges();

            return NoContent();
        }
    }
}
