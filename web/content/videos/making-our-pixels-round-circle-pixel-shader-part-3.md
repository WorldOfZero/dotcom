---
title: "Making Our Pixels Round -  Circle Pixel Shader - Part 3"
date: 2019-06-25
featured_image: https://i.ytimg.com/vi/RD9qvXO_Ha4/mqdefault.jpg

---

{{% youtube id="RD9qvXO_Ha4" %}}

In the past two episodes we've created a pixelating shader that divides an image into a lower resolution grid of pixels and a second shader which renders a circle inside of a 1x1 area. Lets combine these two techniques and create a 1x1 area inside each of the pixel grid cells we've created so that every single cell can be rendered as a circle instead of a pixel.

Once we have a set of 1x1 grids for us to draw, we can use the existing circle shader with some minor modifications so that it takes the newly calculated value instead of our original UV coordinates. Effectively this just introduces a background canvas to our image (it will be black in this example) that frames every circle.

For this video, all of the circular pixels we draw will be the same width. However, in the next video we'll update that to be controlled by the textures alpha channel to give you more control over how this effect looks!

The code for this series is available on GitHub here: https://github.com/WorldOfZero/UnityVisualizations/tree/master/CirclePixels

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u