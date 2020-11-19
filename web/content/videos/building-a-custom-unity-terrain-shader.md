---
title: "Building a Custom Unity Terrain Shader"
aliases: [/v/9rSP-ozPs0A/]
date: 2018-04-27
featured_image: https://i.ytimg.com/vi/9rSP-ozPs0A/mqdefault.jpg

---

{{% youtube id="9rSP-ozPs0A" %}}

We've built a lot of shaders, how do we attach these to our terrain though? Let's take a look at how you can build a basic shader that integrates with Unity's pre-built terrain tools. 

To do this we'll need to build a shader that accepts the Splat maps and Splat's that Unity passes in. Unity will give us a single RGBA control texture. This represents a map of 4 different textures on the terrain. Unity also configures both the Diffuse and Normal maps for each Splat we'll be using. Each channel in our control texture maps to the strength of the splat it represents at that point on the terrain.

By multiplying the texture lookup for each Splat by the value of the control texture that represents it (RGBA maps to Splat 0, 1, 2 and 3 respectively) we know the strength of each texture we should draw. Writing this out to our Surface Shader's Albedo allows us to easily draw the blended maps together.

We also get access to all the other advantages of writing our own shader. We can discard pixels or make our terrain emissive as examples.

If you want to follow along with the Tutorial I used in this video or just want to check out the cool toon shaded terrain example you can find the source here: https://alastaira.wordpress.com/2013/12/07/custom-unity-terrain-material-shaders/

For a reference on Shader Levels you can see this Wikipedia page https://en.wikipedia.org/wiki/High-Level_Shading_Language. The number of interpolated registers increases from 10 in Shader Model 3 to 32 in Shader Model 4+.

The World of Zero Discord Channel: https://discord.gg/hU5Kq2u