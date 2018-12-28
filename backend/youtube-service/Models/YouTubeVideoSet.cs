using System.Collections.Generic;
using Newtonsoft.Json;

namespace WorldOfZero.Services.YouTube.Models
{
  public class YouTubeVideoSet
  {
    [JsonProperty("videos")]
    public List<YouTubeVideo> Videos { get; set; }
  }
}