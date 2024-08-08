using Hash.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using WebApp.Dto;
using WebApp.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FloorController : ControllerBase
    {
        hashparkingDBContext context = null;

        public FloorController(hashparkingDBContext _context)
        {
            context = _context;
        }

        // GET: api/<FloorController>
        [HttpGet]
        public IEnumerable<Floor> Get()
        {
            return context.Floors.ToList();
        }

        // GET api/<FloorController>/5
        [HttpGet("{id}")]
        public Floor Get(int id)
        {
            Floor floor = context.Floors.Find(id);
            return floor;
        }

        // POST api/<FloorController>
        [HttpPost]
        public string Post([FromBody] FloorRequestDto floorRequest)
        {
            Floor floor = new Floor();

            if (!(floorRequest.SlotOccupied <= floorRequest.TotalSlot))
            {
                return "slotoccupied must be less or equal to totalslot";
            }
            else if (!(floorRequest.SlotAvailable <= floorRequest.TotalSlot))
            {
                return "SlotAvailable must be less or equal to totalslot";
            }
            else 
            {
                floor.FloorName = floorRequest.FloorName;
                floor.SlotAvailable = floorRequest.SlotAvailable;
                floor.SlotOccupied = floorRequest.SlotOccupied;
                floor.TotalSlot = floorRequest.TotalSlot;

                context.Floors.Add(floor);
                context.SaveChanges();

                return "Floor added";

            }

            
        }

        // PUT api/<FloorController>/5
        [HttpPut("{id}")]
        public string Put(int id, [FromBody] FloorEditDto floorEdit)
        {
            Floor floor = context.Floors.Find(id);

            if (floor != null)
            {
                floor.SlotAvailable = floorEdit.SlotAvailable;
                floor.SlotOccupied = floorEdit.SlotOccupied;
                floor.TotalSlot = floorEdit.TotalSlot;

                context.Floors.Update(floor);
                context.SaveChanges();

                return "Floor updated";

            }

            return "Floor can't be updated";
        }

        // DELETE api/<FloorController>/5
        [HttpDelete("{id}")]
        public string Delete(int id)
        {
            Floor floorToBeDeleted = context.Floors.Find(id);

            if(floorToBeDeleted != null)
            {
                context.Floors.Remove(floorToBeDeleted);

                context.SaveChanges();

                return "Floor deleted";

            }

            return "Floor can't be deleted";
            
        }
    }
}
