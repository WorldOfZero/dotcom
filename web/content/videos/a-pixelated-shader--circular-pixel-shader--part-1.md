---
title: A Pixelated Shader - Circular Pixel Shader - Part 1
date: 2019-06-21T05:17:36.000Z
tags:
  - shader
  - opensource
  - livecode
  
featured_image: https://i.ytimg.com/vi/mNyZKyVfPeU/mqdefault.jpg
---

{{< youtube id="mNyZKyVfPeU" >}}

Lets make a pixelated shader we can use to easily make a pixelated version of a texture on our Game Objects. We're going to introduce a twist with this though: our pixels will be circles instead of the traditional squares.

To start off, we're going to be dividing everything into a grid of pixels. That is the goal for this video.

In order to accomplish that we're going to use the UV coordinates of our Mesh (0-1 on both the `x` and `y` axis), multiply them by the number of pixels we want in the rows and columns of our image and then round the result to the nearest whole number. This effectively turns a range from 0-1 into a selection of one of our pixel rows/columns. Then we can reduce this pixel value back into the 0-1 range and use it in a texture lookup instead of the default UV coordinates.

This approach is relatively straightforward and gets us where we want to. To do the rounding we can use one of the three rounding functions in order to produce slightly different results: `round`, `floor` or `ceil`. You can play with each of these functions using the source code to see how it impacts things yourself!

For basic guidance the functions operate like this:
* `round`: rounds to the nearest whole number.
* `floor`: rounds values down to the next whole number. 7.9 becomes 7 for example.
* `ceil`: the opposite of `floor`, rounding values up to the next whole number. 7.1 or 7.9 both become 8 when you use this.

Still not sure about the weird off by one grid lines thing.

The source of the completed shader is available on GitHub, check it out: https://github.com/WorldOfZero/UnityVisualizations/tree/master/CirclePixels

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u