---
title: "I Learn About Stencil Buffers and Cutting Holes in Things"
aliases: [/v/AGJ_Pk28UnA/]
date: 2018-04-19
featured_image: https://i.ytimg.com/vi/AGJ_Pk28UnA/mqdefault.jpg

---

{{% youtube id="AGJ_Pk28UnA" %}}

How do you cut holes in solid geometry? You don't... but you can fake it. To do that we're going to use the Stencil Buffer.

The Stencil Buffer is an 8 bit field that you can use in shaders to "Mark" pixels. This can be layered by using two shaders. The first can mark pixels on the stencil buffer and the second can use the stencil  we created as a mask to draw. With some clever tricks we can use this to fake holes in the ground as well as some other fun stuff.

In this we'll explore how to use the Stencil Buffer and try to work around some issues when the stencil overlaps.

You can learn more about the Stencil Buffer and see some Unity examples here: https://docs.unity3d.com/Manual/SL-Stencil.html

You can see some other applications of Stencil Buffers here (used to create a mirror/portal): http://iloveshaders.blogspot.com/2011/05/using-stencil-buffer-rendering-stencil.html

Join the World of Zero Discord server: https://discord.gg/hU5Kq2u