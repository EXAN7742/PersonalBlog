using Microsoft.AspNetCore.Mvc;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ArticlesController : ControllerBase
    {
        private static readonly Article[] Articles = new[]
        {
            new Article{ Id = 1, Title = "How I like riding bycicle", Description = "There I would say a short story about riding a bycicle", Content = "There will full story"},
            new Article{ Id = 2, Title = "Why I want to buy a motorbike", Description = "I have a dream to buy a motorbike", Content = "There will full story about getting motorbike driving license and bla bla bla"}
        };

        private readonly ILogger<ArticlesController> _logger;

        public ArticlesController(ILogger<ArticlesController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public ActionResult<IEnumerable<ArticlePreview>> GetAll()
        {
            return Ok(Articles.Select(a => new ArticlePreview{ Id = a.Id, Title = a.Title, Description = a.Description}));
        }

        [HttpGet]
        [Route("{id:int}")]
        public ActionResult<Article> GetArticleById(int id)
        {
            return Ok(Articles.Where(p => p.Id == id).FirstOrDefault<Article>());
        }
    }
}
