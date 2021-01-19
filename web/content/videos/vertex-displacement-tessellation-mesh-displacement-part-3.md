---
title: "Vertex Displacement Tessellation - Mesh Displacement - Part 3"
aliases: [/v/FNT6nHoml3Q/]
date: 2017-01-11
featured_image: https://i.ytimg.com/vi/FNT6nHoml3Q/mqdefault.jpg
tags: [ shader ]

---

{{% youtube id="FNT6nHoml3Q" %}}

Time to finish off our experiment into mesh displacement. We're going to update our tessellation shader to actually take advantage of the displacement map we developed in the previous video. Once we're done we'll have a tessellating shader with dynamically generated displacement map. With that we'll have an effect similar to our original mesh displacement with manually edited mesh verticies. Obviously their will still be some differences and frankly, the solution isn't perfect. Still, it's pretty cool and I'm all in for cool things!

This video actually covers a very simple thing. Here is what we need to do:

1) Lookup the amount of displacement we need to make from our displacement map.
2) Find the normal or direction the vertex is facing.
3) Move the vertex along the normal by the displacement amount.

None of these steps are particularly difficult but I do my best to screw it up. Even then we get to make things move and it serves as a pretty good introduction to vertex shaders. A way to move vertices on the GPU instead of requiring the CPU to do the work. 

What do you think? Can you think of any ways to improve this? What kinds of projects do you think we should use this in?