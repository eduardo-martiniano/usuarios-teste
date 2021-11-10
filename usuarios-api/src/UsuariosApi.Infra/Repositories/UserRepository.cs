using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using UsuariosApi.Domain.Entities;
using UsuariosApi.Domain.Interfaces;

namespace UsuariosApi.Infra.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly Context _context;

        public UserRepository(Context context)
        {    
            _context = context;
        }

        public async Task Create(User user)
        {
            await _context.Users.AddAsync(user);
            await Save();
        }

        public async Task Delete(int id)
        {
            var user = await GetById(id);
            _context.Users.Remove(user);
            await Save();
        }

        public async Task<List<User>> GetAll()
        {
            return await _context.Users.AsNoTracking().ToListAsync();
        }

        public async Task<User> GetById(int id)
        {
            return await _context.Users.Where(u => u.Id == id).FirstOrDefaultAsync();
        }

        public async Task Save()
        {
            await _context.SaveChangesAsync();
        }

        public async Task Update(int id, User user)
        {
            _context.Entry(await GetById(id)).CurrentValues.SetValues(user);
            await Save();
        }
    }
}
