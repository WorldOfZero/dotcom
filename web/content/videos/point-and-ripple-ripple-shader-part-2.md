---
title: "Point and Ripple - Ripple Shader - Part 2"
aliases: [/v/UVdXUXv3Bw8/]
date: 2018-10-02
featured_image: https://i.ytimg.com/vi/UVdXUXv3Bw8/mqdefault.jpg

---

{{% youtube id="UVdXUXv3Bw8" %}}

Welcome back!

Let's expand our Ripple Shader so it's a bit easier to control and set the groundwork for some of the upcoming features we'll want to build for it. We're going to create two features:

The first is to move the distance or radius of the pulse ring into the Vector component that describes its location. This will add a fourth dimension to its location to represent the time it has existed in the world. We can also use this time value to control other things like the opacity of the effect, so the rippling pulse fades out over time and becomes less vivid.

The second feature is the ability to manually create new pulses using the mouse. This will allow us to raycast a point from our mouse into our scene and assign the shaders pulse origin to that value. It's simple, and there are still some issues with it (we can only create a single ripple) but it's a good step for building a more complex system in the future.

The complete Ripple Effect Shader playlist: https://www.youtube.com/playlist?list=PLEwYhelKHmigqgiurk2lz6l8gRtVaL2zz

The Shield Shader where we learn how to pass arrays to our shaders: https://www.youtube.com/playlist?list=PLEwYhelKHmihp8GNb-XXWE5VhqikYwluj

We've built a number of really cool Visual Effects over the past few years. You can check out some of their implementations and use them yourself by grabbing the code from GitHub: https://github.com/WorldOfZero/UnityVisualizations

Come and join the World of Zero Discord, we'd love to have you stop by: https://discord.gg/hU5Kq2u