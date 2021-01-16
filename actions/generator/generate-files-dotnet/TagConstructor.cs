using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using YamlDotNet.Serialization;
using YamlDotNet.Serialization.NamingConventions;

namespace WorldOfZero.DotCom.Generator.VideoExporter
{
    public static class TagConstructor {
        public static IEnumerable<string> ExpandTags(IEnumerable<string> tags, string tagFile) {
            yield return "";
        }

        public static async Task<TagSet> ParseTagSetFromFile(string file) {
            string fileContents = await File.ReadAllTextAsync(file);
            return ParseTagSet(fileContents);
        }

        private static TagSet ParseTagSet(string contents) {
            var deserializer = new DeserializerBuilder()
                .WithNamingConvention(CamelCaseNamingConvention.Instance)
                .Build();
            return deserializer.Deserialize<TagSet>(contents);
        }
    }

    public class TagSet
    {
        public List<Tag> Tags { get; set; }
    }

    public class Tag
    {
        public string Name { get; set; }
        public List<string> Synonyms { get; set; }
    }
}