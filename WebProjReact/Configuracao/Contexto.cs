using Microsoft.EntityFrameworkCore;
using WebProjReact.Models;

namespace WebProjReact.Configuracao
{
    public class Contexto : DbContext
    {
        public Contexto(DbContextOptions<Contexto> options) : base(options)
        {
            Database.EnsureCreated();
        }

        public DbSet<Produto> Produto { get; set; }
    }
}
