using LittleBooksBackend.Interface;
using LittleBooksBackend.Repository;
using LittleBooksBackend.Service;
using Npgsql;
using System.Data;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddOpenApi();

builder.Services.AddScoped<IDbConnection>(sp =>
    new NpgsqlConnection(builder.Configuration["DB_CONECTION"]));
#region repository
builder.Services.AddScoped<IAuthorRepository, AuthorRepository>();
#endregion
#region service 
builder.Services.AddScoped<IAuthorService, AuthorService>();
builder.Services.AddScoped<IBookService, BookService>();
#endregion

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

