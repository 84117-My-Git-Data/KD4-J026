using Microsoft.EntityFrameworkCore;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Hash.Models
{
	[Table("Admin")]
	public class Admin
	{
		[Key]
		[Column("AdminId")]
		public int AdminId { get; set; }

		[Required]
		public String FirstName { get; set; }

		[Required]
		public String LastName { get; set; }

		[Required]
		public String Email {  get; set; }

		[Required]
		public String Password { get; set; }


		[DefaultValue(false)]
		[Column("IsloggedIn")]
		public bool IsloggedIn{	get; set; }



       

	}
}
