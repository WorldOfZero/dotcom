using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using McMaster.Extensions.CommandLineUtils;
using RazorEngineCore;
using Serilog;

namespace WorldOfZero.DotCom.Generator.VideoExporter
{
    class Program
    {
        // Command line entrypoint
        static void Main(string[] args) => CommandLineApplication.Execute<Program>(args);



        [Option(ShortName = "t", LongName = "template", Description = "A file template used for formatting generated video files")]
        public string Template { get; }

        [Option(ShortName = "o", LongName = "output", Description = "The destination directory for generated files")]
        public string OutputLocation { get; }

        [Option(ShortName = "", LongName = "tags", Description = "Path to a yaml file containing tag definitions")]
        public string TagFile { get; }

        [Option(ShortName = "c", LongName = "channel", Description = "The channel ID for the videos to generate")]
        public string ChannelId { get; }

        // Do not log
        [Option(ShortName = "api", LongName = "youtube-apikey", Description = "API Key enabling access to the YouTube API")]
        public string ApiKey { get; }

        public async Task OnExecuteAsync()
        {
            Log.Logger = new LoggerConfiguration()
                .WriteTo.Console()
                .CreateLogger();

            Log.Information($"Beginning File Generation at {DateTime.Now}");
            var videoService = new VideoDataService("World of Zero Video Generator", ApiKey);
            Log.Information($"Retrieving Uploaded Videos for Channel {ChannelId}");
            var videos = await videoService.GetAll(ChannelId);

            Log.Information($"Retrieved {videos.Count()} videos for {ChannelId}");

            // Replace Video Tags
            var tagSet = await TagConstructor.ParseTagSetFromFile(TagFile);
            var searchableTagSet = new SearchableTagSet(tagSet);
            foreach(var video in videos) {
                video.Snippet.Tags = new List<string>(TagConstructor.ExpandTags(video.Snippet.Tags, searchableTagSet).Distinct());
            }

            // Write files in a async batch - there is a risk here:
            // - Two videos may generate the same name, this would create a race condition
            var fileGenerator = new FileGenerator(Template);
            await fileGenerator.LoadTemplateAsync();
            fileGenerator.CreateDirectory(OutputLocation);
            var fileTaskList = new List<Task<string>>();
            foreach (var video in videos)
            {
                fileTaskList.Add(fileGenerator.Write(OutputLocation, video));
            }
            Task.WaitAll(fileTaskList.ToArray());
            Log.Information($"Batch has completed.");

            // Output number of generated videos for GitHub Actions use
            Console.WriteLine($"::set-output name=generated-videos-count::{videos.Count()}");
        }
    }
}
