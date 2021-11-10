using FluentValidation;
using UsuariosApi.Domain.Entities;

namespace UsuariosApi.Application.Validators
{
    public class UserValidator : AbstractValidator<User>
    {
         public UserValidator()
         {
             RuleFor(u => u.Name)
                .NotEmpty().WithMessage("Digite o nome do usuario.")
                .NotNull().WithMessage("Digite o nome do usuario.");
             
             RuleFor(u => u.LastName)
                .NotEmpty().WithMessage("Digite o sobrenome do usuario.")
                .NotNull().WithMessage("Digite o sobrenome do usuario.");
             
             RuleFor(u => u.Email)
                .NotEmpty().WithMessage("Digite o email do usuario.")
                .NotNull().WithMessage("Digite o email do usuario.")
                .EmailAddress().WithMessage("O email do usuario precisa ser valido.");
             
             RuleFor(u => u.BirthDate)
                .NotEmpty().WithMessage("Digite a data de aniversario do usuario.")
                .NotNull().WithMessage("Digite a data de aniversario do usuario.");
             
             RuleFor(u => u.Scholarity)
                .IsInEnum().WithMessage("O valor para escolaridade não é válido.");
         }
    }
}