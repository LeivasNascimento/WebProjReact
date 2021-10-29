using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
using WebProjReact.Configuracao;
using WebProjReact.Models;

namespace WebProjReact.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClienteController : ControllerBase
    {
        private readonly Contexto _contexto;
        public ClienteController(Contexto contexto)
        {
            _contexto = contexto;
        }

        [HttpGet]
        
        public async Task<IEnumerable<Cliente>> ObterTodos()
        {
            try
            {
                return await _contexto.Cliente.ToListAsync();
            }
            catch (System.Exception)
            {
                return null;
            }
        }
    }
}
