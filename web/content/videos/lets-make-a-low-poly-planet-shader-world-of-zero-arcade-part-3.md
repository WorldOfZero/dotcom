---
title: "Lets Make a Low Poly Planet Shader - World of Zero Arcade - Part 3"
aliases: [/v/i5zwDoYXH5c/]
date: 2017-02-27
featured_image: https://i.ytimg.com/vi/i5zwDoYXH5c/mqdefault.jpg

---

{{% youtube id="i5zwDoYXH5c" %}}

Let's align our planet shader a bit more with the style of our game. We're aiming for a low poly style, the fairly common style of indie game devs lately. Luckily we've already built a low poly shader (https://www.youtube.com/playlist?list=PLEwYhelKHmijHF-FZxiFPmXS0PnPuzfLz). Instead of redoing all the work we did there, lets use that as our starting point and expand upon what we already have to build something a bit more... complex.

Specifically, we're going to be putting together a low poly planet shader that includes two passes, no lighting (or shadows) and supports HDR colors for epic levels of bloom! In order to get that working we're going to modify our existing low poly shader, pull out the lighting and more.

We will be using two passes for this shader, one to render the back of our planet and the other to draw the front. A graphics pass is like a step in the rendering pipeline. Each pass defines how to draw the object at that point. In order to get this only drawing the front and back selectively we'll need to take advantage of the CULL FRONT and CULL BACK commands in Unity.

The colors are easy, simply mark them as [HDR] to enable high dynamic range on their inputs. This allows us to pass in values exceeding the capabilities of our monitor into the shader. Without post effects, that is pointless, but with them we're able to get very good looking bloom effects. This really helps our planet shader stand out.

After that it's simply trying to finagle the mesh to do what we want. In the video we use a mesh built with ProBuilder. After recording I recognized that that perhaps wasn't the best solution after hitting some significant vertex limit restrictions long before I expected to hit them. To fix that problem I built a custom sphere in Blender, exported it to Unity and used that for our final model. This is how I rendered the example near the end of the video as well as the planet for the video thumbnail. That solution provides a lot more clarity and really emphasizes the entire style a bit more.

Ignoring those pitfalls, I'd say this was a fairly successful attempt. Thing could have gone better, but what we got is pretty cool. I think we will be able to do really fun things with this in the future!


This is part of the World of Zero Arcade project. Designed to allow social gaming over a live stream. The project is open source and you're welcome to check out the code and use it in your own projects. The source is on GitHub here: https://github.com/WorldOfZero/Arcade

Eventually the plan is to connect this controller application with a game being streamed over Beam's FTL protocol so you can play the game with people across the world in a social, shared environment. What could go wrong?


Apologies for the delay in uploading this. Things got a bit frantic at the end of last week and I ran out of time to edit the last few videos. I'll be dropping a few extra videos throughout March to make up for it if I can manage, but March is also looking exceedingly busy.