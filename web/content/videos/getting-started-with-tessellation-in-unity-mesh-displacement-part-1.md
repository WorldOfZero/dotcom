---
title: "Getting Started with Tessellation in Unity - Mesh Displacement - Part 1"
aliases: [/v/AU3ZlzhVq7Y/]
date: 2017-01-09
featured_image: https://i.ytimg.com/vi/AU3ZlzhVq7Y/mqdefault.jpg
tags: [  ]

---

{{% youtube id="AU3ZlzhVq7Y" %}}

In this 3 Part series we'll look into modifying the deformable mesh we created in a previous video (https://www.youtube.com/watch?v=l_2uGpjBMl4) and make it use tessellation instead of requiring a high vertex count at all times. Tessellation is the concept of breaking up a shape into a repeatable pattern. In 3D graphics this means dividing triangles into smaller and smaller subsets of triangles. This can be used to add extra details at close range or provide a wide range of other modifications as well. In our case we're going to be using it to achieve the additional detail we need in order to make a simple quad look like it is deforming as physical objects collide with it.

In this part of the video we'll be looking into how to create a texture programmatically. This texture will be used eventually as our "displacement map" - a texture which defines the amount of deformation at a given location. Once this is created and our basic tessellation shader put in place we'll be able to actually look into the more complicated bits required to make this work. Those specific bits will follow in the next two parts.

The source code for the Tessellation Shader used in this example is based off of the Unity Tessellation Surface Shader examples. You can read more about those here: https://docs.unity3d.com/Manual/SL-SurfaceShaderTessellation.html

Apologies for the delay in these videos. I tried to get them out before I went on vacation but that didn't happen. I'll try to be a bit more organized in the future.