using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using System.Text.Json.Serialization;

namespace WebApp.Dto
{
    public class UserRequestDto
    {
        [MaxLength(20, ErrorMessage = "it should be within 20 char range")]
        public string FirstName { get; set; }

        [MaxLength(20, ErrorMessage = "it should be within 20 char range")]
        public string LastName { get; set; }

        public string Email { get; set; }

        [MinLength(6, ErrorMessage = "it should be more than 5 char")]
        public string Password { get; set; }

        [MinLength(10), MaxLength(10)]
        public string PhoneNumber { get; set; }

        public string Gender { get; set; }

        [Range(18,60)]
        public int Age { get; set; }

        [JsonIgnore]
        public bool IsloggedIn
        {
            get;

            set;
        }
    }
}
