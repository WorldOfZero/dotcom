---
title: "A Ring of Asteroids - Let's Make Asteroids VR"
aliases: [/v/ycsnrmh_7Qg/]
date: 2016-11-17
featured_image: https://i.ytimg.com/vi/ycsnrmh_7Qg/mqdefault.jpg

---

{{% youtube id="ycsnrmh_7Qg" %}}

Today we're returning to virtual reality Asteroids. We're going to be taking a look at some of the behind the scenes changes made to the game as well as implementing a new feature. Specifically we're going to be working on adding gravity to the game. Technically we already have that, it's what keeps our player attached to the asteroids. However, what I have planned is a little different than that.

We're going to be implementing a very inaccurate version of circular gravity for our game. The goal being to lock asteroids into a circular orbit around the planet. Think asteroid belt, but around a planet. Similar in a way to the rings of Saturn or Jupiter. The end goal of this is to get a playable ring area around the planet. This will keep our asteroids from flying off into space and, due to our cheating at physics, we'll be able to avoid having to do a lot of the quite difficult parts of keeping objects in orbit (the actual calculations to get that happening are fairly precise and can require some time to have decent results).

Our solution is to take advantage of the Unity Animation Curve and create a custom function that we can use to return the velocity applied due to gravity. This allows us to create as simple or complex of a simulation as we want. We now have the power to create really cool ring structures and manipulate gameplay in tons of other ways. Fun stuff!

You can play the current version of the game on Game Jolt here: http://gamejolt.com/dashboard/games/201273

Want to play with the source code? You can grab it on GitHub: https://github.com/WorldOfZero/Jet-Warrior (Some 3rd party assets and art aren't included. Sorry)