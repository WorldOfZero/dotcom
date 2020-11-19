---
title: "Animating Mandelbrot and Julia Sets in Unity - Fractal Shaders"
aliases: [/v/njbJZZklyJc/]
date: 2016-10-14
featured_image: https://i.ytimg.com/vi/njbJZZklyJc/mqdefault.jpg

---

{{% youtube id="njbJZZklyJc" %}}

Let's get back to work on our Fractal shaders! Specifically, let's animate them. I've got an idea to use a subscriber based design so we can publish various "changes" to our material and dynamically update it. The result: animated realtime fractals! How awesome is that?

Now that we have this, there are a few design glitches we need to work out to make this fully complete. What we write here doesn't work 100%. It can do basic animations, but we want awesome custom animations and for now, we can't get that with this. But we've got a framework we can work with now. Building on that shouldn't be too difficult.

Apologies about some of the audio and video. I reset my OBS settings accidentally and didn't notice until I had recorded this. :( my bad.

Want to play around with the source code? Clone the project on GitHub: https://github.com/WorldOfZero/FractalGenerator