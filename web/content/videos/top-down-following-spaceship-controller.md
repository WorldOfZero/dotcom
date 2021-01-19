---
title: "Top Down Following Spaceship Controller"
aliases: [/v/xYl5qRgOw_M/]
date: 2019-02-06
featured_image: https://i.ytimg.com/vi/xYl5qRgOw_M/mqdefault.jpg
tags: [ unity3d,livecode,csharp,dotnet,tutorial ]

---

{{% youtube id="xYl5qRgOw_M" %}}

Now that we have a spaceship controller that can take a direction input and turn that into movement we can start to play around with it. In this video lets demonstrate one of the really handy use cases I've found for this type of movement controller: basic AI.

Because our controller is designed to be able to turn a direction vector and convert it into thrust and rotation we can use that to track an object by subtracting the current position of our ship from the object we want it to follow. This creates a target trajectory that allows our ship to navigate towards an object even as it moves through space.

Most of what we are building here has more to do with how to make something interesting to follow. We'll be doing that using Sin and Cosine waves to create figure eights and other oscillating patterns for our tracked object to follow.

Source Code for this series is available on GitHub: https://github.com/WorldOfZero/top-down-spaceship

The World of Zero Discord: https://discord.gg/hU5Kq2u