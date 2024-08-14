using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json.Serialization;
using Hash.Models;

namespace WebApp.Dto
{
    public class BookingRequestDto
    {

        public string VehicleNumber { get; set; }

        public DateTime Date { get; set; }

        public byte VehicleType { get; set; }

        public DateTime StartTime { get; set; }

        public DateTime EndTime { get; set; }

        public string Slot { get; set; }

        public int FloorId { get; set; }

        public int UserId { get; set; }

        [JsonIgnore]
        public double TotalCost { get; set; }

        [JsonIgnore]
        public double ParkingCostPerHour { get; set; }



    }
}
