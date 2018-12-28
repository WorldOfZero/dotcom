using Newtonsoft.Json;

namespace WorldOfZero.Services.YouTube.Models
{
  public class YouTubeVideoDescription
  {
    [JsonProperty("id")]
    public string Id { get; set; }
    [JsonProperty("title")]
    public string Title { get; set; }
    [JsonProperty("description")]
    public string Description { get; set; }
  }
}