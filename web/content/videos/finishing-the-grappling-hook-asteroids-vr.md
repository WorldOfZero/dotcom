---
title: "Finishing the Grappling Hook - Asteroids VR"
aliases: [/v/rCIf8UeThZU/]
date: 2016-12-13
featured_image: https://i.ytimg.com/vi/rCIf8UeThZU/mqdefault.jpg

---

{{% youtube id="rCIf8UeThZU" %}}

The grappling hook is now fully functional after a bit of trial and error and a computer crash which caused a bit of a gap in development. That said we're pressing onwards and making good progress at that. We are able to begin completing the development of the physics simulation of the grappling hook.

In addition to working on finishing the physics we're going to be looking into fixing the rope rendering so that it correctly connects to the controller. This video includes work on both of those features!

To solve the grappling hook problem we are going to create a Spring with a length of zero. This spring will be heavilty dampened so that it's forces are signifcantly less abrupt. This will cause the grapple and player to be pulled towards one another and the dampening will cause the acceleration to be less quick than it would otherwise be. This is a quick and easy way to pull one object towards another.

You can play this version of the game on your Vive right now on GameJolt: http://gamejolt.com/games/jet-warrior/201273 or Itch.IO: https://runewake2.itch.io/jet-warrior

Check out the code for yourself on GitHub: https://github.com/WorldOfZero/Jet-Warrior