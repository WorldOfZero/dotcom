---
title: "Accumulating Snow - Dynamic Snow in Unity - Part 3"
aliases: [/v/YbtJyi0ODi8/]
date: 2018-02-28
featured_image: https://i.ytimg.com/vi/YbtJyi0ODi8/mqdefault.jpg
tags: [ csharp,dotnet,unity3d,debugging ]

---

{{% youtube id="YbtJyi0ODi8" %}}

We've already built a snow shader that can deform as you walk over it. But what about recovering over time? We're going to solve that problem here using a compute shader to automatically replenish our snow over time. The current implementation replaces snow at a rapid pace, simulating fantasy blizzard like conditions however we can tweak that over time.

To accomplish this we'll use a double buffering method of writing to one texture and displaying the other and switching between which does which every frame. This allows us to save the current state of things and build the new state simultaneously (and hopefully also addresses some of the issues people encountered with the grass implementation).

Once we have validated that our compute shader is correct and that our buffer is working we can update our function to slowly replenish snow in depressed areas. Effectively giving the effect of the paths filling back in over time.

Featuring special guest: Cortana. She was really excited to join us even though nobody asked her to.

Unity's documentation on compute shaders can be found here: https://docs.unity3d.com/Manual/ComputeShaders.html

Want to learn more about Compute Shaders? Here's a quick introduction to them: https://youtu.be/4Wh8GRrz7WA

We've also used Compute Shaders in our Grass simulation. More on that here: https://youtu.be/gF1LZNOUb9w

Join the World of Zero Discord channel: https://discord.gg/hU5Kq2u