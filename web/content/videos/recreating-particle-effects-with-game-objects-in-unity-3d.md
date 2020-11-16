---
title: "Recreating Particle Effects with Game Objects in Unity 3D"
alias: [/v/FGTpz3O8PnQ/]
date: 2018-04-17
featured_image: https://i.ytimg.com/vi/FGTpz3O8PnQ/mqdefault.jpg

---

{{% youtube id="FGTpz3O8PnQ" %}}

I've been setting up a demo for a new project and ran into a bit of a snag. I had originally intended to use a Particle System to generate the effect I wanted - I already have it created. The problem with Particle System's is that the effect I am working with requires drawing the same object twice using two separate shaders. I don't know a way to do that with a Unity Particle System. So we're going to write our own.

We don't need a full particle system implementation, instead we just need to re-implement effects similar to what already exists in the particle system I've built. The goal is a projectile which emits tall blocks behind it as if it were a wall. To make things interesting we'll also introduce support for branching the particle system so that it can fork into a number of new paths over time.

This will give us the opportunity to implement a number of fun things including an Animation Curve to define the blocks height over time, a game object emitter and some fun 3D math to handle placing particles in space so they look more natural than they might normally.

If you'd like to use the hacked together triplanar shader from this effect you can get it here. It is not necessarily correct and I would recommend using it only for learning: https://gist.github.com/runewake2/a8324484d3538b1b3519926678cdfc35

Join the World of Zero Discord channel! https://discord.gg/hU5Kq2u