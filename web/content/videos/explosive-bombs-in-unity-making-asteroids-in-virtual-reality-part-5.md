---
title: "Explosive Bombs in Unity - Making Asteroid's in Virtual Reality - Part 5"
aliases: [/v/o684gEefKm0/]
date: 2016-10-27
featured_image: https://i.ytimg.com/vi/o684gEefKm0/mqdefault.jpg
tags: [ vr,xr ]

---

{{% youtube id="o684gEefKm0" %}}

Today we're going to be developing explosions for our game Jet Warrior. A 3D virtual reality asteroids game! Instead of space ships you have rockets on your hands. Instead of lasers you have bombs. The problem is that the bombs don't explode. They just disappear. That is boring. We are going to fix that.

We still do not have effects built for the explosion, but we can work on the physics for it. To do that we are going to design it similar to how Minecraft TNT works. Specifically we're going to emit a set number of explosion rays from our bomb when it explodes. Those rays are going to apply our force. This has a number of really cool features. It adds a significant amount of randomness to our explosions which most explosions do anyway. However, the second advantage here is that it avoids any issues with having to actually detect the points of a collision box or other collider. This approach is a LOT simpler. There is also a third advantage, since we are using raycasts this means our explosions can be occluded meaning our player can hide behind an asteroid to avoid them or we could even give them a shield. Cool stuff.

Want to play the game? It is available as a pay what you want game on Game Jolt: http://gamejolt.com/dashboard/games/201273

Paying for the game will help support more projects like this in the future and other cool tech we can explore in future videos. It will also support the design and development of additional features.

Grab the projects source code on GitHub: https://github.com/WorldOfZero/Jet-Warrior