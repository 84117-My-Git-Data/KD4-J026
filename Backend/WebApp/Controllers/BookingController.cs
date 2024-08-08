using Hash.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Hosting;
using WebApp.Dto;
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
        public ActionResult<IEnumerable<Booking>> GetAllBookings()
        {
            var bookings = _Context.Bookings.ToList();

            if (bookings == null)
            {
                return NotFound("No bookings found");
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



        [HttpPost("AddBooking")]
        public ActionResult<Booking> Add([FromBody] BookingRequestDto bookingRequest)
        {

            if (bookingRequest.EndTime < bookingRequest.StartTime)
            {
                return BadRequest("EndTime should be greater than StartTime.");
            }

            int CostId = 1;
            Cost cost = _Context.Costs.Find(CostId);

            if (cost == null)
            {
                return BadRequest("Unble to load the prices...");
            }

            switch (bookingRequest.VehicleType)
            {
                case 1:
                    bookingRequest.ParkingCostPerHour = cost.ParkingCostPerHourBike;
                    break;
                case 2:
                    bookingRequest.ParkingCostPerHour = cost.ParkingCostPerHourCar;
                    break;
                default:
                    return BadRequest("Invalid vehicle type.");
            }

            double hours = (bookingRequest.EndTime - bookingRequest.StartTime).TotalHours;

            switch (hours)
            {
                case <= 1:
                    hours = 1;
                    break;

                case <= 2:
                    hours = 2;
                    break;

                case <= 3:
                    hours = 3;
                    break;

                case <= 4:
                    hours = 4;
                    break;

                case <= 5:
                    hours = 5;
                    break;

                case <= 6:
                    hours = 6;
                    break;

                case <= 7:
                    hours = 7;
                    break;

                case <= 8:
                    hours = 8;
                    break;

                case <= 9:
                    hours = 9;
                    break;

                case <= 10:
                    hours = 10;
                    break;

                case <= 11:
                    hours = 11;
                    break;

                case <= 12:
                    hours = 12;
                    break;

                case <= 24:
                    hours = 24;
                    break;



            }

            bookingRequest.TotalCost = hours * bookingRequest.ParkingCostPerHour * bookingRequest.Slots;

            if (bookingRequest.TotalCost < bookingRequest.ParkingCostPerHour)
            {
                bookingRequest.TotalCost = bookingRequest.ParkingCostPerHour;
            }


            Booking booking = new Booking();

            booking.VehicleNumber = bookingRequest.VehicleNumber;
            booking.VehicleType = bookingRequest.VehicleType;
            booking.TotalCost = bookingRequest.TotalCost;
            booking.Slots = bookingRequest.Slots;
            booking.StartTime = bookingRequest.StartTime;
            booking.EndTime = bookingRequest.EndTime;
            booking.Date = bookingRequest.Date;
            booking.ParkingCostPerHour = bookingRequest.ParkingCostPerHour;
            booking.UserId = bookingRequest.UserId;


            if (booking == null)
            {
                return BadRequest("Booking is not registered, try again.");
            }

            _Context.Bookings.Add(booking);

            _Context.SaveChanges();

            return Ok(booking);
        }





        [HttpPut("{id}")]
        public ActionResult Update(int id, [FromBody] BookingEditDto bookingEdit)
        {
            if (bookingEdit == null)
            {
                return BadRequest("Booking data is null.");
            }

            if (bookingEdit.EndTime < bookingEdit.StartTime)
            {
                return BadRequest("EndTime should be greater than StartTime.");
            }

            int CostId = 1;
            Cost cost = _Context.Costs.Find(CostId);

            Booking existingBooking = _Context.Bookings.Find(id);

            if (existingBooking == null)
            {
                return NotFound($"Booking with ID {id} not found.");
            }

            switch (existingBooking.VehicleType)
            {
                case 1:
                    existingBooking.ParkingCostPerHour = cost.ParkingCostPerHourBike;
                    break;
                case 2:
                    existingBooking.ParkingCostPerHour = cost.ParkingCostPerHourCar;
                    break;
                default:
                    return BadRequest("Invalid vehicle type.");
            }

            double hours = (existingBooking.EndTime - existingBooking.StartTime).TotalHours;

            switch (hours)
            {
                case <= 1:
                    hours = 1;
                    break;

                case <= 2:
                    hours = 2;
                    break;

                case <= 3:
                    hours = 3;
                    break;

                case <= 4:
                    hours = 4;
                    break;

                case <= 5:
                    hours = 5;
                    break;

                case <= 6:
                    hours = 6;
                    break;

                case <= 7:
                    hours = 7;
                    break;

                case <= 8:
                    hours = 8;
                    break;

                case <= 9:
                    hours = 9;
                    break;

                case <= 10:
                    hours = 10;
                    break;

                case <= 11:
                    hours = 11;
                    break;

                case <= 12:
                    hours = 12;
                    break;

                case <= 24:
                    hours = 24;
                    break;



            }

            existingBooking.VehicleNumber = bookingEdit.VehicleNumber;
            existingBooking.Date = bookingEdit.Date;
            existingBooking.VehicleType = bookingEdit.VehicleType;
            existingBooking.StartTime = bookingEdit.StartTime;
            existingBooking.EndTime = bookingEdit.EndTime;
            existingBooking.Slots = bookingEdit.Slots;


            existingBooking.TotalCost = hours * existingBooking.ParkingCostPerHour * existingBooking.Slots;

            if (existingBooking.TotalCost < existingBooking.ParkingCostPerHour)
            {
                existingBooking.TotalCost = existingBooking.ParkingCostPerHour;
            }




            _Context.Bookings.Update(existingBooking);
            _Context.SaveChanges();

            return Ok(existingBooking);
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
