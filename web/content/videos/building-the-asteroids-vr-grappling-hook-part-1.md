---
title: "Building the Asteroids VR Grappling Hook - Part 1"
aliases: [/v/VcAW7tByQ4U/]
date: 2018-05-17
featured_image: https://i.ytimg.com/vi/VcAW7tByQ4U/mqdefault.jpg

---

{{% youtube id="VcAW7tByQ4U" %}}

Time to return to an old series on the channel! Asteroids VR is a take on the classic Asteroids game but in VR. You get to fly around, throw bombs and destroy things. We're going to work on building the grappling hook so you can swing between asteroids. It's going to be fun!

Their are a number of parts we'll need to make in order to get this working and we have a number of choices to make in our implementation.

For rendering the "rope" of our grapple we'll use the Bezier Curve renderer we developed previously (https://youtu.be/tgCFzoG_BJM). This will give us smooth curves and some neat rope physics as well to make our rope feel more alive.

We'll also need to implement a projectile with a few extra rules to handle "firing" our grappling hook. This will allow us to shoot a grappling hook at a fixed speed, destroy it after its traveled a fixed distance and stop it when it collides with an object in the scene.

Once we have these features built we can attach them to our grappling hook and start using it. This won't complete the entire implementation since it won't pull us towards the object it connects with (yet). We'll still have some work to go that enables that. However this will enable us to start firing and using these projectiles and testing out how they work in the game.


VRTK is a VR Toolkit built for Unity by thestonefox that makes developing for VR easier and includes a number of handy scripts for locomotion, performance and interaction with a virtual scene. More about it here: https://github.com/thestonefox/VRTK

Come talk game development, ask questions or learn how to program in the World of Zero Discord server: https://discord.gg/hU5Kq2u