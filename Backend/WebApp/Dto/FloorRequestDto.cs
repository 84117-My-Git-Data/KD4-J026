using System.ComponentModel.DataAnnotations.Schema;

namespace WebApp.Dto
{
    public class FloorRequestDto
    {
        
        public string FloorName { get; set; }

        public int TotalSlot { get; set; }
        
    }
}
