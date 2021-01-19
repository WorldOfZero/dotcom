using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using YamlDotNet.Serialization;
using YamlDotNet.Serialization.NamingConventions;

namespace WorldOfZero.DotCom.Generator.VideoExporter
{
    public static class TagConstructor {
        public static IEnumerable<string> ExpandTags(IEnumerable<string> tags, SearchableTagSet tagSet) {
            foreach(var tag in tags) {
                var mapping = tagSet.Get(tag.Trim('\"'));
                foreach(var mappedTag in mapping) {
                    yield return mappedTag;
                }
            }
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

    public class SearchableTagSet {
        private Dictionary<string, List<string>> synonymMap;

        public SearchableTagSet(TagSet set) {
            synonymMap = new Dictionary<string, List<string>>();
            foreach(var tag in set.Tags) {
                AddElement(tag.Name, tag.Name);
                if (tag.Synonyms == null) {
                    continue;
                }
                foreach(var syn in tag.Synonyms) {
                    AddElement(syn, tag.Name);
                }
            }
        }

        public IEnumerable<string> Get(string key) {
            var lowerKey = key.ToLowerInvariant();
            if (synonymMap.ContainsKey(lowerKey)) {
                return synonymMap[lowerKey];
            } else {
                return new List<string>();
            }
        }

        private void AddElement(string key, string value) {
            // Note: tag keys are stored in lowercase to avoid matching errors
            var lowerKey = key.ToLowerInvariant();
            if (synonymMap.ContainsKey(lowerKey)) {
                synonymMap[lowerKey].Add(value);
            } else {
                synonymMap.Add(lowerKey, new List<string>() { value });
            }
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