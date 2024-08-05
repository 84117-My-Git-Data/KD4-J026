using Hash.Models;
using Microsoft.EntityFrameworkCore;

namespace WebApp.Models
{
    public class hashparkingDBContext : DbContext
    {
        public hashparkingDBContext(DbContextOptions options) : base(options)
        {

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
        }

        public DbSet<Admin> Admins { get; set; }

        public DbSet<User> Users { get; set; }


    }
}
