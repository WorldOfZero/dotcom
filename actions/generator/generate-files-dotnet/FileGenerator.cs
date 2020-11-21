using Google.Apis.YouTube.v3.Data;
using RazorEngineCore;
using Serilog;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace WorldOfZero.DotCom.Generator.VideoExporter
{
    class FileGenerator
    {
        private readonly string templateFile;
        private readonly RazorEngine razorEngine = new RazorEngine();
        private RazorEngineCompiledTemplate template;

        public FileGenerator(string template)
        {
            this.templateFile = template;
        }

        internal async Task LoadTemplateAsync()
        {
            template = razorEngine.Compile(await File.ReadAllTextAsync(templateFile));
        }

        public void CreateDirectory(string directory)
        {
            if (!Directory.Exists(directory))
            {
                Directory.CreateDirectory(directory);
            }
        }

        public async Task<string> Write(string directory, PlaylistItem playlistItem)
        {
            var name = NameGenerator.GetName(playlistItem.Snippet.Title);
            var path = Path.Join(directory, name + ".md");
            var currentContents = await TestFile(path);
            playlistItem.Snippet.Description = UpdateDescription(playlistItem.Snippet.Description);
            var expectedContents = BuildContents(playlistItem);
            // There isn't a point to writing if the contents will not change
            if (currentContents != expectedContents)
            {
                Log.Debug($"updating {path} with {expectedContents.Length} characters");
                await File.WriteAllTextAsync(path, expectedContents);
            } else
            {
                Log.Debug($"{path} is unchanged.");
            }
            return path;
        }

    private string UpdateDescription(string description)
    {
        var replacements = new Dictionary<String, String>() {
            {"˂", "<"},
            {"˃", ">"},
            {"^Note:", "> Note"}
        };
        var result = description;
        foreach(var replacement in replacements) {
            result = Regex.Replace(result,
                replacement.Key, replacement.Value, RegexOptions.Multiline);
        }
        return result;
    }

    private string BuildContents(PlaylistItem playlistItem)
        {
            return template.Run(playlistItem);
        }

        // Test for a files existance, if it exists, the contents of the file is returned.
        public async Task<string> TestFile(string path)
        {
            if (File.Exists(path))
            {
                return await File.ReadAllTextAsync(path);
            }
            else
            {
                return null;
            }
        }
    }
}
