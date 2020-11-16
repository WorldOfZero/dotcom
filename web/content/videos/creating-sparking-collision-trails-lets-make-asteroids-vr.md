---
title: "Creating Sparking Collision Trails - Lets Make Asteroids VR"
alias: [/v/AswGgqyrF-I/]
date: 2016-11-27
featured_image: https://i.ytimg.com/vi/AswGgqyrF-I/mqdefault.jpg

---

{{% youtube id="AswGgqyrF-I" %}}

Expanding on what we were working on yesterday we're going to be adding a spark particle effect to our bomb's spike. This means we'll get a nice and simple sparking effect to happen when our bomb is dragged over something it can stick into. The effect is simple yet allows us to get some really good feedback on if our bomb will stick into an asteroid or not.

To accomplish this we're going to move our particle system to the collision point and then make use of the ParticleSystem.Emit() function to emit new particles whenever we are colliding with an object. The overall effect is really simple to build and the results are fantastic. It's a simple and effective solution to this problem.

The demo of endless mode is available for free on Game Jolt here: http://gamejolt.com/games/jet-warrior/201273

The code is available on GitHub and you can browse it here: https://github.com/WorldOfZero/Jet-Warrior
Certain things are not included in the open source version.