---
title: Turning Circular Pixels Into Diamond Pixels
date: 2019-07-02T17:04:19.000Z
tags:
  - world of zero
  - lets make
  - diamond pixels
  - pixel shader
  - pixelated shader
  - diamond pixel
  - rotation matrix
  - matrix
  - shader
  - surface shader
  - unity 3d
  - unity (game engine)
  - unity development
  - unity shader
  - unity surface shader
  - pixel art
  - unity pixel shader
  - pixelated
  - pixel
  - graphics
  - open source
  - github
  - oss
  - development
  - example
  - walkthrough
  - how to
  - writing a shader
  - recap
  - review
  - circle pixel shader
  - circle pixel
  - custom shader
  - float2x2
  - 2d rotation matrix
  - game development
  - shaders
  
featured_image: https://i.ytimg.com/vi/u5PGfxHjYo0/mqdefault.jpg
---

{{< youtube id="u5PGfxHjYo0" >}}

In previous videos we've built a pixel shader that renders circles instead of the traditional squares. You can rotate the pixels so that the circles can be oriented at any angle to one another. Lets bring that rotating ability to a more standard pixel shader so that we can rotate the pixels of our shader without having to physically rotate the mesh. This should be handy for things like image effects or just being able to create more unique pixel art.

Most of the concepts that we'll use in this have already been covered in previous videos of the series so we'll use this as a way to quickly review some of the different aspects of each part of our circular pixel shader, select the parts we still want and then apply them to create this new effect.

If you want to checkout the earlier videos in this series where we build a series of circular pixel shaders and go into more depth on how all this works you can do that here: https://www.youtube.com/watch?v=mNyZKyVfPeU&list=PLEwYhelKHmigkbFMrVnz4MbmmFzhL2qL4

The code for this shader and the other circular pixel shaders we've built in this series are open source and available on GitHub! You can download the code with this link:  https://github.com/WorldOfZero/UnityVisualizations/tree/master/CirclePixels

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u