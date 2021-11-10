using System.Collections.Generic;
using System.Threading.Tasks;
using UsuariosApi.Domain.Entities;

namespace UsuariosApi.Domain.Interfaces
{
    public interface IUserRepository
    {
        Task Create(User user);
        Task<List<User>> GetAll();
        Task<User> GetById(int id);
        Task Update(int id, User user);
        Task Delete(int id);
        Task Save();
    }
}