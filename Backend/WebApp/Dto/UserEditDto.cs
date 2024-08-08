using System.ComponentModel.DataAnnotations;

namespace WebApp.Dto
{
    public class UserEditDto
    {
        [MaxLength(20, ErrorMessage = "it should be within 20 char range")]
        public string FirstName { get; set; }

        [MaxLength(20, ErrorMessage = "it should be within 20 char range")]
        public string LastName { get; set; }

        [MinLength(6, ErrorMessage = "it should be more than 5 char")]
        public string Password { get; set; }

        public string Gender { get; set; }

        [Range(18, 60)]
        public int Age { get; set; }

    }
}
