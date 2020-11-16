---
title: "A Static Glowing Ring - Ripple Shader - Part 1"
alias: ["/v/EhkBdCdNx-Y"]
date: 2018-07-30
featured_image: https://i.ytimg.com/vi/EhkBdCdNx-Y/mqdefault.jpg

---

{{% youtube id="EhkBdCdNx-Y" %}}

Lets make a new shader in Unity that sends a ripple out across an object to reveal the texture underneath it! We'll get to play with some basic geometry and look at how to add an exponential smoothing function to a linear curve to get a better looking falloff on our rings glow. We'll explore a few different styles including an expanding circle, sphere and ring (eventually settling on the ring).

The approach for developing this is taken in two parts. First we build a simple detector that can detect when something is inside or outside of a circle. The formula for this is (distance greater than radius) to detect if a point is outside the circle. The second step is to take the point where distance == radius and create two equa-distant rings on either side. The distance between these two rings should be equal to the intended width of the ripple we want to create (each ripple width / 2 from the middle point). Once we have that we can build a function that works so that the edges closest to these boundaries are 0 and the points near the center ring are equal to 1. This will give us a gradient falloff we can use to create a smooth pulsing ripple effect.

We also briefly touch on the swizzle operator when working with vectors in a shader and how you can use it to transform a vector easily in shader languages in this video.

In the past we've worked on a lot of different circle based shaders including a similar ripple technique when building the [shield shader](https://www.youtube.com/watch?v=NeZcAYJdkv4&list=PLEwYhelKHmihp8GNb-XXWE5VhqikYwluj&index=1) in an earlier video series. You can accomplish a lot with basic distance formula to create a number of very cool effects!

If you have suggestions for how we could improve this shader or ideas on what we should do with it next let me know in the comments!

Join the World of Zero Discord channel: https://discord.gg/hU5Kq2u