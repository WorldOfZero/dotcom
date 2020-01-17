---
title: Top Down Following Spaceship Controller
date: 2019-02-06T07:55:21.000Z
tags:
  - world of zero
  - lets make
  - top down controller
  - unity 3d
  - dot products
  - character controller
  - ship input controller
  - live coding
  - game development
  - game making
  - unity (game engine)
  - spaceship controller
  - spaceship game movement
  - walkthrough
  - c#
  - csharp
  - how to
  - example
  - tutorial
  - follow script
  - sin wave movement
  - controlling a spaceship
  - unity game development
  - development
  - unity c#
  - spaceship
  - following game objects
  - top down
  - top down spaceship controller
  
featured_image: https://i.ytimg.com/vi/xYl5qRgOw_M/mqdefault.jpg
---

{{< youtube id="xYl5qRgOw_M" >}}

Now that we have a spaceship controller that can take a direction input and turn that into movement we can start to play around with it. In this video lets demonstrate one of the really handy use cases I've found for this type of movement controller: basic AI.

Because our controller is designed to be able to turn a direction vector and convert it into thrust and rotation we can use that to track an object by subtracting the current position of our ship from the object we want it to follow. This creates a target trajectory that allows our ship to navigate towards an object even as it moves through space.

Most of what we are building here has more to do with how to make something interesting to follow. We'll be doing that using Sin and Cosine waves to create figure eights and other oscillating patterns for our tracked object to follow.

Source Code for this series is available on GitHub: https://github.com/WorldOfZero/top-down-spaceship

The World of Zero Discord: https://discord.gg/hU5Kq2u