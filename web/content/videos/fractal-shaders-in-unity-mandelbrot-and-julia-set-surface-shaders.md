---
title: "Fractal Shaders in Unity - Mandelbrot and Julia Set Surface Shaders"
date: 2016-09-29
featured_image: https://i.ytimg.com/vi/SVj0LWmQD-E/mqdefault.jpg

---

{{% youtube id="SVj0LWmQD-E" %}}

Starting with a classic XNA pixel shader which can generate both Mandelbrot and Julia fractals lets convert that into a Unity Surface Shader we can use in our Unity projects. I have never worked with XNA Pixel Shaders before, but they seem simple enough and the translation isn't that difficult. The hardest part is exposing things in Unity.

Honestly, I was surprised how smoothly this worked considering I didn't know the mathematical formula behind the Fractals, nor have I ever written a shader in XNA. The whole process went pretty smoothly.

Want to learn more about the fractals in this video? Here are some links that help describe them and the math that makes them what they are.
⯈ http://mathworld.wolfram.com/MandelbrotSet.html
⯈ https://en.wikipedia.org/wiki/Mandelbrot_set
⯈ https://en.wikipedia.org/wiki/Julia_set

The code in this video is based upon a blog post by Shawn Hargreaves. The blog post and original XNA shaders can be found here: https://blogs.msdn.microsoft.com/shawnhar/2006/12/12/technicolor-julias/

The shaders and the rest of the Fractal Generator project are open source on GitHub under the MIT license. Get them here: https://github.com/WorldOfZero/FractalGenerator

Next up: Interacting with these shaders using scripts.