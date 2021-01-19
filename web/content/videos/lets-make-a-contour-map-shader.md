---
title: "Lets Make a Contour Map Shader"
aliases: [/v/AK8oV4BzrW4/]
date: 2017-05-02
featured_image: https://i.ytimg.com/vi/AK8oV4BzrW4/mqdefault.jpg
tags: [ shader,unity3d ]

---

{{% youtube id="AK8oV4BzrW4" %}}

Let's make a contour map shader by layering a number of planes and creating a simple shader to draw "slices" from a heightmap. Using this we can create a series of layers that actually looks really, really cool!

The coolest part about this shader is that there is remarkably little to it. We just need to read in a height map value, calculate if the world position of the object is within a specific range of the heightmap and then draw a color if it is. There really isn't that much more to it.

If you want to use this effect in your own projects or just see the source it's available on GitHub here: https://github.com/WorldOfZero/UnityVisualizations

Blarg my mic broke during this recording, so this video uses the raw audio from my Camera. Should be fixed for the next video.