---
title: "Lets Make a Dissolving Shader"
alias: ["/v/rGt9haUx-aQ"]
date: 2017-09-14
featured_image: https://i.ytimg.com/vi/rGt9haUx-aQ/mqdefault.jpg

---

{{% youtube id="rGt9haUx-aQ" %}}

A mage blasts a rock with a magic missile, the magic engulfs the stone in flame and slowly tears it apart. How would you render this?

A simple and easily extensible option is the use of a dissolving shader that animates a cutoff point against a mask. This is the basics of an alpha clipped shader, but we can do better! The cutoff is no longer controlled by a simple shader value but passed in from the objects vertex color. This gives two significant bonuses, first we can modify the cutoff across the mesh easily with different values, second we can animate this in a particle effect!

These options allow us to create a really simple particle system that animates the dissolving of a mesh over time.

For added fun a rim glow or burning effect can be added by adding an emissive color to the edges of the shader. This helps emphasize the magical nature of what we're rendering and can also be easily modified to render things like burning paper from a book.

For such a simple shader there is a lot we can do with this!

Want to try out the code from this video yourself? Grab the source from GitHub! https://gist.github.com/runewake2/1e0841a3a0d2f257202d3b6cb5e30840

Discord: https://discord.gg/hU5Kq2u