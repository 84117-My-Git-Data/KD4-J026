using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using WebApp.Controllers;
using WebApp.Dto;
using System.Data.SqlTypes;

namespace Hash.Models
{
    [Table("Booking")]
    public class Booking
    {
        [Key]
        [Column("BookingId")]
        public int BookingId { get; set; }

        [Required]
        [StringLength(10)]
        [Column("VehicleNumber")]
        public string VehicleNumber { get; set; }


        [Required]
        [Column("Date")]
        public DateTime Date { get; set; }


        [Required]
        [Column("ParkingCostPerHour")]
        [DefaultValue("0")]
        public double ParkingCostPerHour { get; set; }


        [Required]
        [Column("VehicleType")]
        public byte VehicleType { get; set; }


        [Required]
        [Column("StartTime")]
        public DateTime StartTime { get; set; }

        [Required]
        [Column("EndTime")]
        public DateTime EndTime { get; set; }

        [Required]
        [Column("TotalCost")]
        [DefaultValue("0")]
        public double TotalCost { get; set; }

        [Required]
        [Column("Slots")]
        public int Slots { get; set; }

        [ForeignKey("User.UserId")]
        public int UserId { get; set; }

    }


}









