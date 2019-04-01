using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using WorldOfZero.Services.YouTube.Actions;
using WorldOfZero.Services.YouTube.Models;

namespace WorldOfZero.Services.YouTube.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VideoController : ControllerBase
    {
        private IMemoryCache _cache;

        public VideoController(IMemoryCache cache) {
            _cache = cache;
        }

        // GET api/values
        [HttpGet()]
        //[ResponseCache(Duration = 240)] // Introduce caching header to response
        public async Task<ActionResult<YouTubeVideoSet>> Get()
        {
            YouTubeVideoSet videos;

            // If the cache does not contain an entry for videos, then refresh the cache
            if (!_cache.TryGetValue("youtube_videos", out videos)) {
                var fullVideos = await new UploadsAction().Run();
                var videoList = fullVideos.Select(video => {
                    return new YouTubeVideo() {
                        Id = video.Snippet.ResourceId.VideoId,
                        Title = video.Snippet.Title,
                        Thumbnail = video.Snippet.Thumbnails.Medium.Url,
                        Description = video.Snippet.Description,
                        PublishedAt = video.Snippet.PublishedAt.HasValue ? video.Snippet.PublishedAt.Value : DateTime.Now
                    };
                }).ToList();
                videos = new YouTubeVideoSet() {
                    Videos = videoList
                };

                // Add videos to the cache
                var cacheOptions = new MemoryCacheEntryOptions()
                    .SetSlidingExpiration(TimeSpan.FromHours(1))
                    .SetAbsoluteExpiration(TimeSpan.FromHours(4));
                
                // Insert new videos result into the cache
                _cache.Set("youtube_videos", videos, cacheOptions);
            }

            // CORS for local testing without DOCKER
            // Response.Headers.Add("Access-Control-Allow-Origin", "*");

            return videos;
        }
    }
}