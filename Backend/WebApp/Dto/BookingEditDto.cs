using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel;

namespace WebApp.Dto
{
    public class BookingEditDto
    {
        public string VehicleNumber { get; set; }
        
        public DateTime Date { get; set; }

        public byte VehicleType { get; set; }

        public DateTime StartTime { get; set; }
      
        public DateTime EndTime { get; set; }
   
        public int Slots { get; set; }

    }
}
