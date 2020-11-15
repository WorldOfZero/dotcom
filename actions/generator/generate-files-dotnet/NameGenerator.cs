using System;
using System.Collections.Generic;
using System.Text;
using System.Text.RegularExpressions;

namespace WorldOfZero.DotCom.Generator.VideoExporter
{
    static class NameGenerator
    {
        private const string validCharacters = @"0-9a-zA-Z\-_";
        private const string spaceReplacement = @"-";

        // Note: Changes to this are breaking changes and will impact historical generation detection
        // It could lead to duplicate files
        public static string GetName(string input)
        {
            var result = input.Trim(); //Remove leading/trailing spaces
            result = result.Replace(" ", spaceReplacement);
            Regex regex = new Regex($"[^{validCharacters}]+");
            result = regex.Replace(result, "");
            result = result.ToLower();
            Regex duplicateRemover = new Regex($"{spaceReplacement}[{spaceReplacement}]+");
            result = duplicateRemover.Replace(result, spaceReplacement);
            return result;
        }
    }
}
