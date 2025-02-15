var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddCors(options =>
{
    //options.AddDefaultPolicy(
    options.AddPolicy("MyPolicy",
        policy =>
        {
            policy
            //.AllowAnyOrigin()
            .WithOrigins("http://localhost:4200")
            .AllowAnyMethod()
            //.WithMethods("GET", "POST")
            .AllowAnyHeader()
            .AllowCredentials();
        });
});
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

//app.UseHttpsRedirection();

app.UseStaticFiles(); 
app.UseRouting();

//app.UseCors();
app.UseCors("MyPolicy");

app.UseAuthorization();

app.MapControllers();

app.Run();
