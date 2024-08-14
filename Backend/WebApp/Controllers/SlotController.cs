using Hash.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using WebApp.Dto;
using WebApp.Models;

namespace WebApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SlotController : ControllerBase
    {
        private  hashparkingDBContext _context = null;

        public SlotController(hashparkingDBContext context)
        {
            _context = context;
        }

       


        [HttpGet]
        public ActionResult<IEnumerable<Slot>> GetAllSlots()
        {
            var slots = _context.Slots.ToList();
            if (slots == null || !slots.Any())
            {
                return NotFound("No slots found.");
            }
            return Ok(slots);
        }

     




        [HttpGet("GetSlotById/{id}")]
        public ActionResult<Slot> GetSlot(int id)
        {
            var slot = _context.Slots.Find(id);
            if (slot == null)
            {
                return NotFound($"Slot with ID {id} not found.");
            }
            return Ok(slot);
        }


        [HttpPost("BookSlot")]
        public ActionResult BookSlot([FromBody] SlotRequestDto slotRequest)
        {
            if (slotRequest == null)
            {
                return BadRequest("Slot data is null.");
            }

            var slotName = slotRequest.SlotName;

            Console.WriteLine(slotRequest.FloorId);

            Slot newSlot;

            switch (slotRequest.FloorId)
            {
                case 1:
                    newSlot = _context.Slots.Where(a => a.SlotName == slotRequest.SlotName).FirstOrDefault();

                    if (newSlot == null)
                    {
                        return BadRequest("Slot not available");
                    }

                    if (newSlot.IsOccupied)
                    {
                        return BadRequest("Slot is already booked");
                    }

                    newSlot.IsOccupied = true;

                    _context.SaveChanges();

                    return Ok(newSlot.IsOccupied);

                case 2:
                    newSlot = _context.Slots.Where(b => b.SlotName == slotRequest.SlotName).FirstOrDefault();

                    if (newSlot == null)
                    {
                        return BadRequest("Slot not available");
                    }

                    if (newSlot.IsOccupied)
                    {
                        return BadRequest("Slot is already booked");
                    }

                    newSlot.IsOccupied = true;

                    _context.SaveChanges();

                    return Ok(newSlot.IsOccupied);

                default:
                    return BadRequest("Invalid floor");
            }
        }

        internal object BookSlot(int floorId, string slot)
        {
            throw new NotImplementedException();
        }


        /*   
            var existingSlot = _context.Slots.FirstOrDefault(s => s.SlotName == slotRequest.SlotName && s.FloorId == slotRequest.FloorId);
            if (existingSlot != null && existingSlot.IsOccupied)
            {
                return BadRequest("Slot is already occupied and not available for booking.");
            }

        Slot slot = new Slot();
            {
            slot.FloorId = slotRequest.FloorId;
            slot.SlotNumber = slotRequest.SlotNumber;
            slot.IsOccupied = slotRequest.IsOccupied;
            };

            _context.Slots.Add(slot);
            _context.SaveChanges();

            return CreatedAtAction(nameof(GetSlot), new { id = slot.SlotId }, slot);
        }*/





        /* 
         [HttpPut("{id}")]
             public ActionResult UpdateSlot(int id, [FromBody] SlotEditDto slotEdit)
             {
                 var slot = _context.Slots.Find(id);

                 if (slot == null)
                 {
                     return NotFound($"Slot with ID {id} not found.");
                 }


                 if (slotEdit.FloorId != 1 && slotEdit.FloorId != 4)
                 {
                     return BadRequest("Only FloorId 1 and 2 are allowed.");
                 }


                 var slotCount = _context.Slots.Count(s => s.FloorId == slotEdit.FloorId);
                 if (slotCount > 10)
                 {
                     return BadRequest("Each floor can have a maximum of 10 slots.");
                 }


                 if (slotEdit.IsOccupied && slot.IsOccupied)
                 {
                     return BadRequest("Slot is already occupied and cannot be booked again.");
                 }

                 slot.FloorId = slotEdit.FloorId;
                 slot.SlotNumber = slotEdit.SlotNumber;
                 slot.IsOccupied = slotEdit.IsOccupied;

                 _context.Slots.Update(slot);
                 _context.SaveChanges();

                 return NoContent();
             }*/



        // [HttpDelete("{id}")]
        //     public ActionResult DeleteSlot(int id)
        //     {
        //         var slot = _context.Slots.Find(id);

        //         if (slot == null)
        //         {
        //             return NotFound($"Slot with ID {id} not found.");
        //         }

        //         _context.Slots.Remove(slot);
        //         _context.SaveChanges();

        //         return NoContent();
        //     }
    }
}
