using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Hash.Models
{
    [Table("Floor")]
    public class Floor
    {
        [Key]
        public int FloorId { get; set; }

        [Column("FloorName")]
        public string FloorName { get; set; }


        [Column("TotalSlot")]
        public int TotalSlot { get; set; }

    }
}
