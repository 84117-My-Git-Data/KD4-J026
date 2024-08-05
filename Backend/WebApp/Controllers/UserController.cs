using Hash.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Identity.Client;
using System.Linq;
using WebApp.Dto;
using WebApp.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApp.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class UserController : ControllerBase
	{
		hashparkingDBContext context = null;
		public UserController(hashparkingDBContext _context) 
		{
			context = _context;
		}
		// GET: api/<UserController>
		[HttpGet]
		public IEnumerable<User> GetAllUsers()
		{
			return context.Users.ToList();
		}


		// GET api/<UserController>/5
		[HttpGet("{id}")]
		public User Get(int id)
		{
			User getUser = context.Users.Find(id);
			if (getUser != null) {
				return getUser;
			}

			return null;
		}

		// POST api/<UserController>
		[HttpPost("registeruser")]
		public void Post([FromBody] User user)
		{
			Console.WriteLine(user.ToString());
			context.Users.Add(user);
			context.SaveChanges();
		}

		// PUT api/<UserController>/5
		[HttpPut("{id}")]
		public void Put(int id, [FromBody] User user)
		{
			User userToEdit = context.Users.Find(id);
			userToEdit.FirstName = user.FirstName;
			userToEdit.LastName = user.LastName;
			userToEdit.Gender = user.Gender;
			userToEdit.Age = user.Age;
			userToEdit.IsloggedIn = user.IsloggedIn;
			context.SaveChanges();

		}

		// DELETE api/<UserController>/5
		[HttpDelete("{id}")]
		public void Delete(int id)
		{
			User userTobedeleted = context.Users.Find(id);
			context.Users.Remove(userTobedeleted);
			context.SaveChanges();

		}



	}
}
