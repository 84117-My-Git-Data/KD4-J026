using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Hash.Models
{
	[Table("User")]
	public class User
	{
		[Key]
		[Column("UserId")]
		public int UserId { get; set; }

		[Required]
		[StringLength(50)]
		[Column("FirstName")]
		public string FirstName { get; set; }


		[Required]
		[StringLength(50)]
		[Column("LastName")]
		public string LastName { get; set; }

		[Required]
		[StringLength(50)]
		[Column("Email")]
		public string Email { get; set; }

	
		[Required]
		[Column("Password")]
		public string Password { get; set; }
		[Required]
		[Column("PhoneNumber")]
		public string PhoneNumber { get; set; }

		[Required]
		[Column("Gender")]
		public string Gender { get; set; }

		[Required]
		[Column("Age")]
		public int Age { get; set; }

		[DefaultValue(false)]
		[Column("IsloggedIn")]
		public bool IsloggedIn
		{
			get;

			set;
		}

	}



	
}
