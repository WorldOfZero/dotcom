---
title: "Generating Images from SVGs with Unity and Inkscape"
aliases: [/v/dnDz4lVbMWw/]
date: 2022-12-23
featured_image: https://i.ytimg.com/vi/dnDz4lVbMWw/mqdefault.jpg
tags: [ unity3d,csharp,dotnet,tools,shell,tutorial ]

---

{{% youtube id="dnDz4lVbMWw" %}}

Often when building a project you'll need to do some sort of repetitive task as part of the work. This can be things like data entry, running a script or other jobs. We can use software to automate some of this work to help save ourselves time and remove the potential slowness of doing things manually. Additionally, this kind of automation can ensure that jobs complete with consistent results with less opportunity for human error. Today we're going to dive into an implementation of a quick tool to help us convert SVG's (which Unity can't natively render) into PNG's automatically so we can take advantage of SVG based icon packs or designs and the scalability of SVG's while still being able to view and use the art inside of Unity.

In order to do this we're going to create a Unity [`MenuItem`](https://docs.unity3d.com/ScriptReference/MenuItem.html) that launches the Inkscape CLI to automatically render images from SVG files in our directory.

The code for this task looks like this:

```csharp
// Search the projects Assets directory and all children directories
var searchDirectory = Path.Combine(Environment.CurrentDirectory, "Assets");
Debug.Log($"Searching for SVGs in {searchDirectory}");
var svgFiles = Directory.EnumerateFiles(searchDirectory, "*.svg", SearchOption.AllDirectories);
foreach (var svgFile in svgFiles)
{
    // Generate a new path with a PNG extension instead of the original SVG extension - reusing other parts of the path
    var pngFile = Path.ChangeExtension(svgFile, "png");
    Debug.Log($"Converting {svgFile} to {pngFile}");
    Process process = Process.Start("inkscape",
        $"-o {pngFile} -w 32 -h 32 {svgFile}"); //32 is the size in pixels of the width and height of the generated image
    process.WaitForExit();
}
Debug.Log("jobs done");
```

You can get a copy of Inkscape here: https://inkscape.org/
The Inkscape Wiki has more information about how you can get started using the Inkscape CLI: https://wiki.inkscape.org/wiki/index.php/Using_the_Command_Line

The icons I'm using are from the Material Design Icons set, you can browse the complete set of icons here: https://materialdesignicons.com/

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u