---
title: "Building worldofzero.com - Improved Video Descriptions"
aliases: [/v/NxQv5N91bQg/]
date: 2020-11-21
featured_image: https://i.ytimg.com/vi/NxQv5N91bQg/mqdefault.jpg
tags: [ csharp,dotnet,livecode ]

---

{{% youtube id="NxQv5N91bQg" %}}

I've recently been doing a lot of work on my website worldofzero.com in order to help launch the new version and improve the usability and accessibility of the site. One of the main features of the site is a tool which pulls every video I have released on this channel on YouTube and converts it into a markdown file that can be shown as an article on the site. This feature works great but needs some tweaks.

For this first fix we're going to be addressing an issue with greater-than and less-than characters. Neither of these characters is supported inside a YouTube description without some form of special modifications. We're going to work on implementing a quick script that can modify the video descriptions and change them to use the proper formatting. This should allow code examples with conditionals or generics to render correctly on the website and we'll also be introducing a customization that can modify certain text to create a markdown "quote".

The code to turn a "Note:" into a markdown quoted note looks like this:

```csharp
Regex.Replace(result, "^Note:", "> Note:", RegexOptions.Multiline);
```

> Note: this generation and replacement feature will only effect the rendering on my website and won't effect the video descriptions themselves.

worldofzero.com's source code is located at https://github.com/WorldOfZero/dotcom. You can find all the articles and code that makes it work there.

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u