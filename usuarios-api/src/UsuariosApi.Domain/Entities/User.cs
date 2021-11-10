using System;
using UsuariosApi.Domain.Enums;

namespace UsuariosApi.Domain.Entities
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public DateTime BirthDate { get; set; }
        public Scholarity Scholarity { get; set; }
    }
}
