using Newtonsoft.Json;

namespace WorldOfZero.Services.YouTube.Models
{
  public class YouTubeVideo
  {
    [JsonProperty("id")]
    public string Id { get; set; }
    [JsonProperty("title")]
    public string Title { get; set; }
    [JsonProperty("thumbnail")]
    public string Thumbnail { get; set; }
  }
}