using Google.Apis.YouTube.v3.Data;

namespace WorldOfZero.DotCom.Generator.VideoExporter
{
    // Page model for the video template: a video plus values derived for the front matter.
    // Public because the Razor template binds to it dynamically.
    public class VideoPage : Video
    {
        // A complete front matter line (without trailing newline), or empty when no summary could be built.
        public string DescriptionLine { get; set; }
    }
}
