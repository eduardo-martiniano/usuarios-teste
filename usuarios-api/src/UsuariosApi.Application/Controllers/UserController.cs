using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using UsuariosApi.Domain.Entities;
using UsuariosApi.Domain.Interfaces;

namespace UsuariosApi.Application.Controllers
{
    [ApiController]
    [Route("api/users")]
    public class UserController : Controller
    {
        private readonly IUserRepository _userRepository;

        public UserController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        [HttpGet, Route("")]
        public async Task<IActionResult> Get()
        {
            var users = await _userRepository.GetAll();
            return Ok(users);
        }

        [HttpGet, Route("{id}")]
        public async Task<IActionResult> Get([FromRoute] int id)
        {
            var user = await _userRepository.GetById(id);
            if (user == null)
                return NotFound();

            return Ok(user);
        }

        [HttpPost, Route("")]
        public async Task<IActionResult> Create([FromBody] User user)
        {
            await _userRepository.Create(user);
            return Ok();
        }

        [HttpPut, Route("{id}")]
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] User user)
        {
            var userExists = await _userRepository.GetById(id);
            if (userExists == null)
                return NotFound();

            await _userRepository.Update(id, user);
            return NoContent();
        }

        [HttpDelete, Route("{id}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            var userExists = await _userRepository.GetById(id);
            if (userExists == null)
                return NotFound();

            await _userRepository.Delete(id);
            return NoContent();
        }
    }
}