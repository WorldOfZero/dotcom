---
title: "Doing The (Sin) Wave - Building a Flat Shader in Unity - Part 4"
date: 2016-10-19
featured_image: https://i.ytimg.com/vi/ESWJlVvj7Xc/mqdefault.jpg

---

{{% youtube id="ESWJlVvj7Xc" %}}

Continuing with the perfect circle we were rendering let's see what happens when we plug in other values! Specifically let's plug in a sin wave and render that. The results? A disaster. But a good disaster.

To solve this problem we are able to plug in our new formula's directly into the same shader we used to create the previous perfect circle. This makes the actual code changes required minimal at most. I like minimal code changes. Minimal code changes mean less things can break. Or in this case, everything can break.

To fix things we'll have to explore various tactics including things like visual debugging to figure out what is causing our shader to be... well... wrong.

I'm pretty happy with how this video turned out. It captures a lot of what I've been trying to make this channel about. Specifically, it captures failure. Not a grand, world ending kind of failure. But a failure none-the-less. That's important because not only do we get to fix that failure during the course of this video, but we get to learn about all the things we thought we knew or overlooked when coming up with this. Well... more accurately you get to see all the things I thought I knew fail spectacularly and how I go about pretending to make them work again.

It's like rubber duck debugging but with the world watching... and no rubber duck.

Want to see the code? This project is Open Source on GitHub: https://github.com/WorldOfZero/2D-Flat-Shape-Shader

Like shader stuff? Here are some of my other shader projects:

Fractal Shaders Ported From XNA (Julia and Mandelbrot Sets): https://www.youtube.com/watch?v=SVj0LWmQD-E&index=3&list=PLEwYhelKHmihuoAtkcxIw4_6vpmRXhLcM

A spatial shader for the Audiogame Jam: https://www.youtube.com/watch?v=FB9TtAUK1SY&list=PLEwYhelKHmijNDEnQEZ8bznJLGwe1DPC1&index=6