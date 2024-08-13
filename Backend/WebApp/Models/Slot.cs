using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Hash.Models
{
    [Table("Slot")]
    public class Slot
    {
        [Key]
        [Column("SlotId")]
        public int SlotId { get; set; }

        
        [Required]
        [Column("SlotName")]
        public string SlotName { get; set; }

        [DefaultValue(false)]
        [Column("IsOccupied")]
        public bool IsOccupied { get; set; }

        [Required]
        [ForeignKey("Floor.FloorId")]
        public int FloorId { get; set; }

        /*public Floor Floor { get; set; }*/
    }
}
