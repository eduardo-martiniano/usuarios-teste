using Microsoft.EntityFrameworkCore;
using UsuariosApi.Domain.Entities;

namespace UsuariosApi.Infra
{
    public class Context : DbContext
    {
        public DbSet<User> Users { get; set; }
        
        public Context(DbContextOptions options) : base(options){ }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(Context).Assembly);
        }
    }
}