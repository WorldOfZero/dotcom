---
title: Lets Draw A Circle - Circle Pixel Shader - Part 2
date: 2019-06-22T06:51:51.000Z
tags:
  - world of zero
  - lets make
  - circle pixel shader
  - circle shader
  - shader
  - unity
  - unity 3d
  - unity (game engine)
  - game development
  - unity game development
  - unity walkthrough
  - walkthrough
  - example
  - lets make unity
  - unity shaders
  - unity shader
  - surface shader
  - gamedev
  - indiedev
  - software development
  - software
  - unity3d
  - draw a circle
  - circular shader
  - unity visualizations
  - unity effects
  - open source
  - oss
  - open source software
  - github
  - circular pixels
  - stippling
  - screentone
  
featured_image: https://i.ytimg.com/vi/BVPfcI-O83s/mqdefault.jpg
---

{{< youtube id="BVPfcI-O83s" >}}

Last time we built a grid of pixels for our circular pixel shader. In this video, part 2, we're going to be figuring out how to draw a circle. This will get us both of the component parts we need in order to make this effect work and we can start working on ways to combine the effects.

The circle we're trying to make can be calculated using a formula like this:

```shader
float2 position = float2(0.5, 0.5);
position -= IN.uv_MainTex.xy;
float distance = length(position);
```

The general idea being to create a vector between the current UV coordinate of each fragment and the center of the image. Then, if that vector has a length less than the radius of our circle (0.5 in our case) we want to draw it to be flagged as being inside the circle, otherwise it is outside of it.

Grab the source for the completed shader on GitHub: https://github.com/WorldOfZero/UnityVisualizations/tree/master/CirclePixels

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u