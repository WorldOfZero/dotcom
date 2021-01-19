---
title: "Custom Particle Emitters in Unity 3D"
aliases: [/v/v3Dq_oVHsNs/]
date: 2017-10-13
featured_image: https://i.ytimg.com/vi/v3Dq_oVHsNs/mqdefault.jpg
tags: [ unity3d ]

---

{{% youtube id="v3Dq_oVHsNs" %}}

Lets build a custom particle emitter that can emit particles on the ground anywhere in a rectangle. This is the first step of lighting the grass in our grass renderer on fire.

The approach here is fairly simple, we'll use the size of our grass "box" to identify a random point inside of our grass and then project a ray down to find the terrain. This is similar to how the grass for our terrain is generated.

Then we'll make use of the Particle System's Emit() methods and specifically take advantage of the ParticleSystem.EmitParams() to ste our particle's position. This is simple, but effective and allows us to define our particle emitter in code.

Particle emission is simply done by creating a counter that tracks the number of particles that should be emitted each frame.

The Grass Renderer is on GitHub and I'm always looking for good ways to improve it! Let me know below! https://github.com/WorldOfZero/UnityVisualizations/tree/master/Unity%20Terrain/Grass

Discord: https://discord.gg/hU5Kq2u