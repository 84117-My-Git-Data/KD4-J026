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
            if (getUser != null)
            {
                return getUser;
            }

            return null;
        }

        // POST api/<UserController>
        [HttpPost("registeruser")]
        public string Post([FromBody] UserRequestDto userRequest)
        {
            User user = new User();

            user.FirstName = userRequest.FirstName;
            user.LastName = userRequest.LastName;
            user.Email = userRequest.Email;
            user.Password = userRequest.Password;
            user.PhoneNumber = userRequest.PhoneNumber;
            user.Gender = userRequest.Gender;
            user.Age = userRequest.Age;
            user.IsloggedIn = false;

            context.Users.Add(user);
            context.SaveChanges();

            return "User added";
        }

        // PUT api/<UserController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] UserEditDto userEdit)
        {
            User userToBeEdit = context.Users.Find(id);

            userToBeEdit.FirstName = userEdit.FirstName;
            userToBeEdit.LastName = userEdit.LastName;
            userToBeEdit.Gender = userEdit.Gender;
            userToBeEdit.Age = userEdit.Age;
            userToBeEdit.Password = userEdit.Password;

            context.Users.Update(userToBeEdit);
            context.SaveChanges();

        }

        // DELETE api/<UserController>/5
        /*[HttpDelete("{id}")]
        public void Delete(int id)
        {
            User userTobedeleted = context.Users.Find(id);
            context.Users.Remove(userTobedeleted);
            context.SaveChanges();

        }*/



    }
}
