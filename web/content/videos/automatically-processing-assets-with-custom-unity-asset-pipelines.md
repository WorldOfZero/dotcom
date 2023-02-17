---
title: "Automatically Processing Assets with Custom Unity Asset Pipelines"
aliases: [/v/8eFaLtJMsNo/]
date: 2023-02-11
featured_image: https://i.ytimg.com/vi/8eFaLtJMsNo/mqdefault.jpg
tags: [ csharp,dotnet,unity3d ]

---

{{% youtube id="8eFaLtJMsNo" %}}

Continuing our journey of adding the ability to easily use SVG assets in Unity, today we're going to be exploring how to automatically process and convert SVGs to PNGs whenever one is added to our Unity project.

In order to handle Unity asset import events we need to create an `AssetPostprocessor` by creating a custom class that inherits from the class. Once that's done we can extend our custom Asset Processing using the provided methods from Unity. A list of those is available here: https://docs.unity3d.com/ScriptReference/AssetPostprocessor.html

The `AssetPostprocessor`'s `OnPostprocessAllAssets` function is called when the Assets imported into your project have changed. In this case, if we move, delete or add new assets this is the message that will be invoked for us to hook into those changes and run our custom Asset processing.

For more information you can check out the documentation here: https://docs.unity3d.com/ScriptReference/AssetPostprocessor.OnPostprocessAllAssets.html

The code I'm using expects Inkscape to be on your PATH. If you don't have Inkscape installed you can download it here: https://inkscape.org/release/. If Inkscape is correctly configured you should be able to run `inkscape --help` in your terminal and get a valid response.

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u