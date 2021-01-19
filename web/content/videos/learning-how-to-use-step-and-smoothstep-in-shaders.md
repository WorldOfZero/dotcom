---
title: "Learning How To Use Step and Smoothstep in Shaders"
aliases: [/v/-vGNd8pnbYs/]
date: 2018-11-17
featured_image: https://i.ytimg.com/vi/-vGNd8pnbYs/mqdefault.jpg
tags: [ shader,unity3d,tutorial ]

---

{{% youtube id="-vGNd8pnbYs" %}}

A number of people have commented that we should be using step or smoothstep instead of some of the branching if/else blocks we've used in other videos (branches in shaders tend to perform worse than other functions). I've never tried using `step` or `smoothstep` before though so we'll need to learn what they do and how we might use them.

One of my favorite features of shaders is how easily they allow you to describe things visually. That's how we're going to go about learning `step`/`smoothstep` and hopefully it's a strategy you can apply to other functions you're unfamiliar with in other shaders.

To accomplish this we'll create a very simple shader that takes world space positions and plugs them into our function. We can combine this with a few different objects to explore what happens. A plane can provide a graph of the values and a cube can be used to probe the values at specific points more easily.

A few resources to learn more about `step`, `smoothstep` and other smoothing functions:

- https://thebookofshaders.com/05/
- https://en.wikipedia.org/wiki/Smoothstep

Join the World of Zero Discord channel: https://discord.gg/hU5Kq2u