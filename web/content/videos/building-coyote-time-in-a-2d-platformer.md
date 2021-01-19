---
title: "Building Coyote Time in a 2D Platformer"
aliases: [/v/8GUKmvzRoMA/]
date: 2020-03-17
featured_image: https://i.ytimg.com/vi/8GUKmvzRoMA/mqdefault.jpg
tags: [ unity3d,livecode,debugging,csharp,dotnet ]

---

{{% youtube id="8GUKmvzRoMA" %}}

Coyote Time is an idea in platformers that allows the player to jump for a few frames after they have left the platform they are on. Effectively this provides a few frames for the player to jump in the air. This is a useful accessibility feature for platformers that helps improve the curve of an ideal jump from a slope with an immediate drop to death if you miss your timing to a relatively helpful curve that allows some leeway on both sides of the edge of the platform.

To implement this we will need to build some sort of system that is able to buffer the players jump inputs and store that state for a set period of time. To do this I'm going to use a basic floating point counter that stores a constant value equal to the amount of coyote time we want the player to have. Every frame the player is not grounded this value will be reduced until it falls below zero. Once the value is below zero the player is no longer able to send jump commands.

For this project we'll be exploring adding Coyote Time into an existing platforming character controller that I have been building. We'll need to adopt the solution so it is compatible with the other features of this controller. I've never done this before so we can learn together! 

@MattThorson discussed some of the solutions they used when building Celeste including Coyote Time. You can find some examples in the gif's shared in their twitter thread: https://twitter.com/MattThorson/status/1238338574220546049

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u