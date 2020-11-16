---
title: "Sending Array's To Shaders - Lets Make an Energy Shield - Part 1"
aliases: [/v/NeZcAYJdkv4/]
date: 2017-09-28
featured_image: https://i.ytimg.com/vi/NeZcAYJdkv4/mqdefault.jpg

---

{{% youtube id="NeZcAYJdkv4" %}}

Lets start building a cool energy shield shader that can dynamically react to collisions and more. To begin we'll be looking at how to pass collision information to our shield by sending an array of positions to our shader.

In order to get this whole thing working we'll send over object space positions that represent points on our object that have been hit. Then we will send that information to our shader. Once there our shader will transform its own world space coordinates to match the object space coordinates of our points. Then we'll can identify if a collision occurred near the point. If so we'll shade it red and if not we'll do nothing. This allows us a simple way to add points to our sphere where we want.

Want to learn more about passing arrays to shaders? Alan Zucconi goes into more depth and uses them to build a heatmap on top of a map with simple shaders: http://www.alanzucconi.com/2016/01/27/arrays-shaders-heatmaps-in-unity3d/

More about Homogeneous Coordinates and what they are used for: https://en.wikipedia.org/wiki/Homogeneous_coordinates

Discord: https://discord.gg/hU5Kq2u