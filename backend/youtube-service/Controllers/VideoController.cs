using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WorldOfZero.Services.YouTube.Models;

namespace WorldOfZero.Services.YouTube.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VideoController : ControllerBase
    {
        // GET api/values
        [HttpGet("{id}")]
        public ActionResult<YouTubeVideoDescription> Get(string id)
        {
            return new YouTubeVideoDescription() {
                Id = "1234",
                PublishedAt = DateTime.Now,
                Title = "Test",
                Description = "Description"
            };
        }

        // GET api/values
        [HttpGet()]
        public ActionResult<YouTubeVideoSet> Get()
        {
            var videos = new List<YouTubeVideo>();
            videos.Add(new YouTubeVideo() {
                Id = "1324",
                Title = "Test",
                Thumbnail = "Test"
            });
            return new YouTubeVideoSet() {
                Videos = videos
            };
        }
    }
}