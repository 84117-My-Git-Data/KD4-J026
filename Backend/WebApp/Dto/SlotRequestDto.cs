using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using System.Text.Json.Serialization;

namespace WebApp.Dto
{
    public class SlotRequestDto
    {
        public int FloorId { get; set; }

        public string SlotName { get; set; }

        [JsonIgnore]
        [DefaultValue(false)]
        public bool IsOccupied { get; set; }
    }
}
