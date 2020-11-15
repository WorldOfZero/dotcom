---
title: "Sticky Bombs - Lets Make Asteroids VR"
date: 2016-11-27
featured_image: https://i.ytimg.com/vi/FF-Sgo6WS64/mqdefault.jpg

---

{{% youtube id="FF-Sgo6WS64" %}}

The art for Asteroid's VR has started to roll in and with that it's time to start work on some of the new features. In this video we're going to be updating the bombs so that not only do they use the new updated art, but they also can be stuck or thrown into asteroids. It'll be really fun!

To do this we'll be using a really simple raycast and messaging system to detect when (and where) we collide with an object and then pass that information along so that we can stick it directly to an object. This includes cleaning up some of the components already attached to our object. The bombs rigidbody component for example can be removed once we have stuck our object to the asteroid (a stuck object doesn't need to simulate physics). A number of other fun challenges come up from this and we'll fix them as they come up.

This simple implementation provides us with a really quick and easy starting point for what we'll be doing next: adding sparks when the bomb and asteroid collide with one another.

The demo of endless mode is available for free on Game Jolt here: http://gamejolt.com/games/jet-warrior/201273

The code is available on GitHub and you can browse it here: https://github.com/WorldOfZero/Jet-Warrior
Certain things are not included in the open source version.