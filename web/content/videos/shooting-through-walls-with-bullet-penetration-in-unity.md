---
title: "Shooting Through Walls With Bullet Penetration in Unity"
aliases: [/v/RIru7m73HZA/]
date: 2018-12-11
featured_image: https://i.ytimg.com/vi/RIru7m73HZA/mqdefault.jpg

---

{{% youtube id="RIru7m73HZA" %}}

Lets take a look at how you might build a solution that allows you to fire projectiles through walls of varying sizes. This will combine two different types of raycasts in opposing directions, the first will work as you might expect: a raycast from the end of our gun or whatever else is shooting in the direction the bullet should travel. The second raycast we'll use occurs only when we have hit an object. When that happens we want to test if our bullet came out the other side.

To test if a bullet has gone through an object we'll need to things: the first is some measure of how far our bullet or projectile should go into the object we are shooting into. This is important so we can accurately predict whether our bullet has actually traveled through the object and allows more powerful weapons to have more penetrating power than something lighter.

The second feature we need to accomplish this is a way to Raycast against a single specific collider. This is provided by the Unity `Collider.Raycast` function which allows a ray to be cast against a single collider.

With these two features we can test for basic projectile penetration. First we fire a ray forward until it hits an object. If that occurs we save the collider we struck, the point we hit and move on. We want to continue tracing the projectile from the point it hit and we can do this by adding the point to the result of the penetrating distance times the projectiles forward velocity. This will result in a new point somewhere inside or on the other side of the object we hit.

To test if the bullet has left the object or was unable to fully break through we can use a second raycast which is cast backwards. The goal here is to see if we collide with the back face of whatever object we originally impacted. If we are now hitting the back side of the collider with our ray that means we successfully exited and were able to shoot through the surface. If our ray does not intersect the collider then the bullet has ended up somewhere inside of the surface and never exited the other side.

This entire process can be repeated as needed to allow a single projectile to move through a number of objects before being stopped.

More about the Raycasting functions we used here:
* Collider.Raycast: https://docs.unity3d.com/ScriptReference/Collider.Raycast.html
* Physics.Raycast: https://docs.unity3d.com/ScriptReference/Physics.Raycast.html

Join the World of Zero Discord channel: https://discord.gg/hU5Kq2u