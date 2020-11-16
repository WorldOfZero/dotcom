---
title: "Variable Radius Circle Pixels -  Circle Pixel Shader - Part 4"
aliases: [/v/u-RXmILAmxs/]
date: 2019-06-26
featured_image: https://i.ytimg.com/vi/u-RXmILAmxs/mqdefault.jpg

---

{{% youtube id="u-RXmILAmxs" %}}

In the last video we made our circular pixel shader work. It now draws a grid of different colored circles based on the input from the shaders texture. Now we're going to try to make this shader include have varying radius on each circular pixel based upon the alpha channel of the pixel we are sampling.

It turns out doing this is relatively straight-forward. We already have done the texture lookup and already have a circle shader that cuts off at some radius. To make this effect work all we need to do is combine the two so that the radius of our circle and the alpha channel are multiplied together. This means that an alpha of `0` results in a circle with a radius of `0` while an alpha of `1` will result in a circle with a radius of `0.5` (a diameter of `1.0` - the full width of our pixels).

I completely over estimated the amount of work this would take to implement. Turns out, it's a lot easier than I had planned for with the way we have designed things so far. 

The code for this series is available on GitHub here: https://github.com/WorldOfZero/UnityVisualizations/tree/master/CirclePixels

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u