---
title: "Adding Custom Lighting to a Unity Particle Shader"
aliases: [/v/2TBCozxI7-I/]
date: 2018-01-25
featured_image: https://i.ytimg.com/vi/2TBCozxI7-I/mqdefault.jpg

---

{{% youtube id="2TBCozxI7-I" %}}

Lets make a shader that lets you add cool pseudo volumetric lighting to your particle effects.

Imagine putting lights inside a cloud of smoke, because Unity's particles always face you the lighting on a standard shader can be questionable. We're going to use some math to make it work anywhere so we can move a sphere of color through a particle system and have it correctly light up.

This will explore how to pass in Vertex Colors to a surface shader (Unity Particle Systems change particle color using the Vertex Color) as well as how to get the world position of a fragment in your shader using the generated worldPos property. This will let us calculate how much light is actually hitting the shader at any specific spot. Once we have that we need to plug the result in to our particles emission and add some color.

It's a fairly straight forward approach to a transparent surface shader that can be reused for particle systems or meshes without to much trouble. The effect also looks really cool!

Grab the source code for this shader here as well as source for other projects on the channel: https://github.com/WorldOfZero/UnityVisualizations

Discord: https://discord.gg/hU5Kq2u