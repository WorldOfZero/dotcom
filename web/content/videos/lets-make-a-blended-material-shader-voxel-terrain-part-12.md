---
title: "Lets Make a Blended Material Shader - Voxel Terrain - Part 12"
aliases: [/v/btOs50kk9IA/]
date: 2017-06-23
featured_image: https://i.ytimg.com/vi/btOs50kk9IA/mqdefault.jpg
tags: [ shader,unity3d,tutorial ]

---

{{% youtube id="btOs50kk9IA" %}}

Lets improve our Voxel Terrain! Specifically, let's start work on a shader that can shade our terrain. Our terrain uses each color channel from the vertices of our voxel mesh to designate a different material. We'll be working to blend between those three color channels using the height maps and more.

This solution works by sampling from each of our separate materials height maps and combining that value with the strength of each material taken from the vertex color mapping. This effectively means that the placement of terrain is based on how you paint the terrain, but also based on the heights of the materials your terrain uses.

We'll explore two different ways to accomplish the blending in this solution from the naive if/elseif/else option to a more mathematical solution using some smoothing functions.

Another approach to blending is listed here that modifies the Sigmoid we use in this video: https://medium.com/analytic-animations/ease-out-the-half-sigmoid-7240df433d98. This will likely result in more accurate results then our approximation. We don't use it in the video but I think we might want to.

The shader we built in this video's source code is available on GitHub. You can download it here: https://gist.github.com/runewake2/bd05cf1b3249bf6d4591930046794002 and use it yourself. This also adds normal mapping support that wasn't covered in the video.

This is a continuation of a longer series on building a 2D voxel terrain.