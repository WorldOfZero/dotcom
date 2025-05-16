---
title: "Using Polar Coordinates in Unity Shader Graphs"
aliases: [/v/Nj1YynIG9vQ/]
date: 2025-05-16
featured_image: https://i.ytimg.com/vi/Nj1YynIG9vQ/mqdefault.jpg
tags: [ unity3d,shader,livecode ]

---

{{% youtube id="Nj1YynIG9vQ" %}}

Getting back into making videos and decided to explore polar coordinates at a high level. Polar coordinates are an alternative coordinate system that maps points onto a radius and angle instead of an XY position like we have when using more typical Cartesian coordinates. This means that they can be used to generate radial effects originating from a point.

In this video we're going to be taking a look at how to use polar coordinates to generate a lightspeed-like effect in Unity's Shader Graph. We'll map a texture onto this new coordinate space, animate it and then use the radius built into the coordinate system to control the transparency of the effect allowing us to create an animated cloud-like effect we might pass through in some magic portal or space adventure!

Wolfram Alpha has some more in-depth dives into Polar Coordinates and how they work and can be used. https://mathworld.wolfram.com/PolarCoordinates.html

***

To create a polar coordinate from scratch you can plug UV coordinates into a `length` and `arctan2` function. This generates both parts of the coordinate for you if you'd prefer to do that instead of using the builtin polar coordinate node in shader graph.

This is the first video in a while and also the first on a new PC. Definitely still working out some bugs there and hoping to get editing etc back together and everything on a more consistent schedule.