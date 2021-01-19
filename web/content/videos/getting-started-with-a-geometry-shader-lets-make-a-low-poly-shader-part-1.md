---
title: "Getting Started with a Geometry Shader - Lets Make a Low Poly Shader - Part 1"
aliases: [/v/HY6qFbmbij8/]
date: 2017-02-16
featured_image: https://i.ytimg.com/vi/HY6qFbmbij8/mqdefault.jpg
tags: [ shader,unity3d ]

---

{{% youtube id="HY6qFbmbij8" %}}

There are two ways to accomplish a low poly, flat style in 3D graphics. The first is to modify the smoothing on the mesh so that normal's aren't smoothed out. This causes all sorts weird behavior so we're going to ignore that. The next solution is to have each triangle built independently so they do not share any vertexes. This solution is also quite bad because you need to actually physically modify the mesh. There is a third solution, but it relies upon some shader magic. Obviously the magic solution is the best one.

To accomplish this we're going to use what is called a Geometry Shader, a layer which sits between the traditional vertex and fragment shader programs. Geometry shaders allow you to create new geometry completely within your shader program which means it will run entirely on the GPU. No modifications to our mesh are required with this solution. You can read up more on what this enables here: https://msdn.microsoft.com/en-us/library/windows/desktop/bb509609(v=vs.85).aspx

We're going to use the geometry shader we are creating to extract each triangle from our mesh and draw them independently. We will use a cross product between the points of the triangles in order to generate a normal direction. Not that we use the normals currently. Our goal by the end of this is to generate and create a simple shader that can generate each individual triangle. We will follow up in the next few videos by implementing lighting, color and other shading. Things took longer than expected though, I'm unfortunately not very familiar with geometry shaders. I've never written one before.

You can see the example I'm following here: http://www.battlemaze.com?p=153

A note regarding this video in particular. Some of the information in it is flat out, 100% wrong. Some of those miscommunications should be cleared up throughout the series.