---
title: Writing a Snow Covered Shader
date: 2019-10-04T06:18:59.000Z
tags:
  - world of zero
  - lets make
  - snow covered
  - shader
  - surface shader
  - unity shader
  - unity 3d
  - writing a shader
  - unity3d
  - unity (game engine)
  - unity game development
  - custom shader
  - snow shader
  - snow
  - game development
  - shader development
  - coding
  - software
  - development
  - live coding
  - walkthrough
  - example shader
  - snow covered shader
  - snow topped
  - snow topped shader
  - dot product
  - normal
  - world normal
  
featured_image: https://i.ytimg.com/vi/bY7r6blL1K8/mqdefault.jpg
---

{{< youtube id="bY7r6blL1K8" >}}

Lets write a custom snow covered surface shader in Unity that can procedurally generate snow and place it on top of any object in our scene. This will let us add any amount of snow to an object in any orientation and get it placed in your world really easily.

This shader is built using world space normals and dot products.

Every mesh has normal values applied to their vertices, these normals represent the orientation of the vertex in `object space`. `object space` is the orientation of normals relative to the object itself. We want these normals in `world space` so that they are relative to the rest of our game world.

Once we have the world space normal we can compare that to the direction of our snow. We use a dot product for this. Then, after we have a measure of how in-line our world space mesh normal is with the snow direction we can determine whether to draw snow or the default texture.

The snow covered shader is available on GitHub here: https://github.com/WorldOfZero/UnityVisualizations/tree/master/SnowTopped

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u