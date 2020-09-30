---
title: "My .STL Generator Breaks in Germany (and other countries), Lets Fix That"
date: 2020-05-12
featured_image: https://i.ytimg.com/vi/3GQdDiym1V0/mqdefault.jpg

---

{{% youtube id="3GQdDiym1V0" %}}

A few weeks ago one of you left a comment on an older video of mine that built a 3D Model exporter into Unity. The code was built to take a mesh from Unity and serialize it into the STL File Format so it could be imported into 3D printing software. The code was generating a file, but the file wasn't working. It would generate incorrect looking graphics or fail completely. When I tried to reproduce these results I couldn't, the exporter worked like I expected. To try to understand the problem I asked for the file of an exported Cube.

STL files work by storing a set of facet's that represent the triangles of a mesh. These facets include a normal and the vertices of the triangle (more on the format here: https://en.wikipedia.org/wiki/STL_%28file_format%29#ASCII_STL).The problem with the files that were being generated was that the vertices had weird values like `0,5 0,5 0,5` instead of the `0.5 0.5 0.5` that the STL format expects. This was a serialization issue that I'd created accidentally.

To create our STL file we were using `String.Format` to place data into our string. Behind the scenes some extra work goes on to format the data you provide into something that respects the norms of the local user. This was causing a problem because different countries use different characters to represent the decimal in numbers. In the United States I'm used to using periods (`.`), but that isn't the only decimal separator that is used countries like Germany have used commas to separate decimals (`,`). Because I had not explicitly defined how to format numbers C# was taking the default format: a format based on the location the code was being run. This was causing the code to behave differently depending on where it was run and causing these parsing errors.

To fix this we could define a `CultureInfo` object (or use an existing one like `CultureInfo.InvariantCulture`) that describes how to handle these situations. What is the local symbol for currency? How is currency delimited? How are decimal points represented? By defining this and passing it into our `String.Format` functions we were able to create more predictable results.


In this video we'll also look into using git to pull the code from GitHub and create a pull request to submit our changes. Hopefully covering the full cycle of downloading, fixing and publishing our modifications.

## Links

Unity STL is on GitHub at: https://github.com/WorldOfZero/Unity-STL


The original STL generator: https://youtu.be/M6nHIAK83vQ
The custom editor window and exporter: https://youtu.be/EWpQCg8L5_Q


`CultureInfo` documentation: https://docs.microsoft.com/en-us/dotnet/api/system.globalization.cultureinfo
Documentation on `CultureInfo.InvariantCulture`: https://docs.microsoft.com/en-us/dotnet/api/system.globalization.cultureinfo.invariantculture

Wikipedia has a list of the different countries using decimal commas and decimal points if you're interested in learning more: https://en.wikipedia.org/wiki/Decimal_separator#Arabic_numerals

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u