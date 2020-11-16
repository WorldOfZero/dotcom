---
title: "Wind Mapped Snow - Dynamic Snow in Unity - Part 6"
aliases: [/v/xMd_uzV0hPk/]
date: 2018-03-21
featured_image: https://i.ytimg.com/vi/xMd_uzV0hPk/mqdefault.jpg

---

{{% youtube id="xMd_uzV0hPk" %}}

Last video we added support for wind to blow snow across our terrain. That was cool but the implementation was fixed and required us to have wind move in a specific direction. That's boring. In this video we're going to fix that by adding a "Wind Map". This will allow us to specify the wind direction and strength at any point on our terrain.

This allows us to add occlusion (say from a rock) or other complex simulations that make our snow more dynamic than it already was.

This change can be done by adding a sampler to our compute shader that accepts the new wind map and passing that map into the shader from our SnowSimulation script.

We'll also look at abstracting out the "texture position" in our compute shader so that the code is easier to read and requires less calculations.

Building a Unity Snow Shader playlist: https://www.youtube.com/playlist?list=PLEwYhelKHmig37twXTbU5ksXeEXmGjUsM

Still trying to get your head around Compute Shaders? Check out this intro to Compute Shaders that was recorded as I learned them myself: https://youtu.be/4Wh8GRrz7WA

Want to play with shaders in realtime? Shadertoy has you covered! This makes learning shaders and exploring what other people have made really easy. Check out a sample shader we made on Shadertoy here: https://youtu.be/Y2IADn-wAZM

Join the World of Zero Discord channel to discuss development of games and other software or to share your projects and get feedback: https://discord.gg/hU5Kq2u