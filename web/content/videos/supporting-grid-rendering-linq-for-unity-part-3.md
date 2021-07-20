---
title: "Supporting Grid Rendering - LINQ for Unity - Part 3"
aliases: [/v/oKwDx4sDSHQ/]
date: 2021-07-17
featured_image: https://i.ytimg.com/vi/oKwDx4sDSHQ/mqdefault.jpg
tags: [ unity3d,csharp,dotnet,tutorial ]

---

{{% youtube id="oKwDx4sDSHQ" %}}

Unity's Editor UI does not support rendering elements in a grid. For some elements like Textures, Meshes and Materials rendering the results in a vertical list does not use the space of the LINQ for Unity editor view very effectively so a grid-based view could provide a much more concise and cleaner UI. Let's implement a way to draw these components in a Grid!

Unity's Editor UIs can expand and scale in two dimensions either vertically or horizontally. We want to create a horizontally wrapping grid, this means the grid will add elements adjacent to one another horizontally so long as extra space is available. Once no more space is available in the row we create a new row and continue adding new elements to that new row. This approach will allow the grid to expand vertically without introducing a horizontal scroll.

For our implementation we're going to be using uniformly sized grid elements. This means that every element in the grid will take up the same amount of space. Doing this prevents creating any complex layout situations (and potentially having to solve the 2D napsack problem).

***

You can find more World of Zero content at worldofzero.com or catch my streams at twitch.tv/worldofzerodev
Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u