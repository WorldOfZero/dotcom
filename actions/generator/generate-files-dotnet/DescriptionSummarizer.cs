using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

namespace WorldOfZero.DotCom.Generator.VideoExporter
{
    // Builds a short plain-text summary of a video description for use as the page's meta description.
    static class DescriptionSummarizer
    {
        private const int TargetLength = 155;

        // Lines containing any of these are boilerplate (links, sponsors, socials), not a summary.
        private static readonly Regex boilerplate = new Regex(
            @"https?://|www\.|\b(discord|patreon|twitter|github|affiliate|sponsor|amazon|subscribe|follow me|music by|music:)\b",
            RegexOptions.IgnoreCase | RegexOptions.Compiled);

        public static string Summarize(string description)
        {
            if (string.IsNullOrWhiteSpace(description))
            {
                return "";
            }

            var sentences = new List<string>();
            var length = 0;
            var inCodeFence = false;
            foreach (var rawLine in description.Split('\n'))
            {
                var line = rawLine.Trim();
                if (line.StartsWith("```"))
                {
                    inCodeFence = !inCodeFence;
                    continue;
                }
                if (inCodeFence || line.Length == 0 || IsSkippable(line))
                {
                    continue;
                }

                line = StripMarkdown(line);
                if (line.Length == 0)
                {
                    continue;
                }
                sentences.Add(line);
                length += line.Length + 1;
                if (length >= TargetLength)
                {
                    break;
                }
            }

            return Truncate(string.Join(" ", sentences));
        }

        // Escapes a value for use inside a double quoted YAML scalar.
        public static string EscapeYaml(string value)
        {
            return value.Replace("\\", "\\\\").Replace("\"", "\\\"");
        }

        private static bool IsSkippable(string line)
        {
            return boilerplate.IsMatch(line)
                || line.StartsWith("#")
                || line.StartsWith(">")
                || line.StartsWith("{{")
                || line.StartsWith("<")
                || line.StartsWith("-")
                || line.StartsWith("*")
                || line.StartsWith("|")
                || Regex.IsMatch(line, @"^\d+[.)]\s")
                || Regex.IsMatch(line, @"^\d{1,2}:\d{2}"); // chapter timestamps
        }

        private static string StripMarkdown(string line)
        {
            var result = Regex.Replace(line, @"!?\[([^\]]*)\]\([^)]*\)", "$1"); // [text](url) -> text
            result = Regex.Replace(result, @"[`*_]+", "");
            return Regex.Replace(result, @"\s+", " ").Trim();
        }

        private static string Truncate(string text)
        {
            if (text.Length <= TargetLength)
            {
                return text;
            }
            var cut = text.LastIndexOf(' ', TargetLength);
            if (cut <= 0)
            {
                cut = TargetLength;
            }
            return text.Substring(0, cut).TrimEnd(' ', ',', ';', ':', '-', '.') + "…";
        }
    }
}
