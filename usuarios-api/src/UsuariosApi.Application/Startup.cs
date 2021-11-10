using FluentValidation.AspNetCore;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using UsuariosApi.Application.Validators;
using UsuariosApi.Domain.Interfaces;
using UsuariosApi.Infra;
using UsuariosApi.Infra.Repositories;

namespace UsuariosApi.Application
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<Context>(options =>
            {
                options.UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=UsersDB;Integrated Security=True;");
            });

            services.AddScoped<IUserRepository, UserRepository>();

            services.AddControllers()
                .AddFluentValidation(p => 
                {
                    p.RegisterValidatorsFromAssemblyContaining<UserValidator>();
                });
            
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo { Title = "USERS-API", Version = "v1" });
            });
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            app.UseSwagger();
            app.UseSwaggerUI(opt =>
            {
                opt.SwaggerEndpoint("/swagger/v1/swagger.json", "USERS-API V1");
                opt.RoutePrefix = string.Empty;
            });
        }
    }
}
