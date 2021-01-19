---
title: "Planet Ring Shadows - Lets Make an Asteroid Belt - Part 2"
aliases: [/v/gI9-mzU6GAg/]
date: 2017-01-20
featured_image: https://i.ytimg.com/vi/gI9-mzU6GAg/mqdefault.jpg
tags: [ tutorial,unity3d ]

---

{{% youtube id="gI9-mzU6GAg" %}}

When we left our planetary ring shader we had a basic shader which could draw a planetary ring. That had a few problems though. One of them is that it doesn't draw any shadows on our planet! That's no fun. In this video we'll create a separate pass which can render our shadows from our ring onto the planet. This will allow us to add that extra level of realism for our rings. Plus, it's a lot of fun to work with and isn't even particularly hard. Granted, I say that now. Turns out it's actually harder than it looks.

In order to get this working we are going to use a cutoff shader. Normally transparent shaders do not render shadows. This is because transparency doesn't really work that well with how shadows are actually calculated. There are two easy ways to get shadows if you eliminate transparent shaders. Standard opaque shaders like rocks and houses or cutoff shaders which are most commonly used when rendering leaves or bushes.

We'll be using cutoff shaders to solve this problem. By creating a simple modification of our previous planetary ring shader we can use a variable cutoff value to prevent our shader from drawing below a certain threshold creating a simpler shader we can use to render the shadows.

Unlike a standard transparent shader a cutoff shader has only two levels of transparency: fully opaque or solid and fully transparent. This is accomplished by either drawing or not drawing the fragment. You can think of a cutoff shader like a standard opaque shader but with some parts missing.


You can find out more about writing your own Surface Shaders in the Unity documentation here: https://docs.unity3d.com/Manual/SL-SurfaceShaders.html