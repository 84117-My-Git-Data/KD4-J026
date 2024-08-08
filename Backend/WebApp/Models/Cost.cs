using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApp.Models
{
    [Table("Cost")]
    public class Cost
    {
        [Key]
        public int CostId { get; set; }

        [Column("ParkingCostPerHourBike")]
        [DefaultValue("5")]
        public double ParkingCostPerHourBike { get; set; }


        [Column("ParkingCostPerHourCar")]
        [DefaultValue("10")]
        public double ParkingCostPerHourCar { get; set; }

    }
}
