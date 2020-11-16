---
title: "Firing Projectiles - Lets Make a Side Scrolling Shooter - Part 5"
aliases: [/v/7FXrK8-7sP4/]
date: 2018-07-10
featured_image: https://i.ytimg.com/vi/7FXrK8-7sP4/mqdefault.jpg

---

{{% youtube id="7FXrK8-7sP4" %}}

Time to make our ship go pew., pew! We're going to add projectiles. We'll build a set of components that can fire and build projectiles. This will include the `ProjectileMovement` class for moving projectiles forward and detecting collisions, `ProjectileTimeout` for timing out projectiles and deleting old projectiles, `TimedProjectileLauncher` which will periodically fire new projectiles and finally the `DamageDisplay` for debugging projectile collisions and damage.

## Classes

### `ProjectileMovement`

This script has two functions. It will move a projectile forward and check for collisions. If it collides with an object it sends a message to the object that was hit called `OnProjectileHit` which has information about what happened. This is a handy way to pass events around between different objects in a scene.

### `ProjctileTimeout`

This is mostly to protect against any random issues where projectiles fly off the screen and continue to exist forever. After a period of time any object with this script attached will destroy itself.

### `TimedProjectileLauncher`

The thing that does the shooting. This is a constantly shooting class which count a value up and, once a threshold is reached fire a projectile and begin counting again.

### `DamageDisplay`

The damage display is just a simple helper class that reacts to the OnProjectileHit messages that are sent by the `ProjectileMovement` class. From those messages it just generates a Debug message so we know things are working.


Pew! Pew!

Come join the World of Zero Discord channel: https://discord.gg/hU5Kq2u