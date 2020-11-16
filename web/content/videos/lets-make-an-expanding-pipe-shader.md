---
title: "Lets Make An Expanding Pipe Shader"
aliases: [/v/2Br1nS59PLU/]
date: 2018-06-20
featured_image: https://i.ytimg.com/vi/2Br1nS59PLU/mqdefault.jpg

---

{{% youtube id="2Br1nS59PLU" %}}

I've been seeing a few example of uses for a cartoonish styled pipe that expands as something goes through it. Let's take a look a look at one of the ways we could implement this effect ourselves. This will give us a good chance to look at vertex colors, probuilder and building a custom vertex shader.

The end result of this will allow us to create a pipe that expands or contracts at a specific point and is enlarged with a cosine wave. This means we can represent both high and low pressure points within the pipe with this approach.

Our approach works by displacing vertices inside of the vertex shader based upon the vertex color. This is not the only way to approach this. Tessellation would help make the pipe smoother and require less static vertices. A texture lookup could be used to replace the vertex color.

I had a lot of fun with this one despite some of unexpected hurdles!

For some more documentation on writing Unity Surface Shaders you can check out some of the official Unity docs here: https://docs.unity3d.com/Manual/SL-SurfaceShaders.html

I've collected the code from a number of the visual effects we've built on the channel from shaders to fake volumetric lights and posted the code to GitHub. You can browse the repo here: https://github.com/WorldOfZero/UnityVisualizations

Join the World of Zero Discord channel: https://discord.gg/hU5Kq2u