---
title: "Rotating the Flight Controller - Lets Make a Side Scrolling Shooter - Part 2"
aliases: [/v/Jk3UckZSBBk/]
date: 2018-06-16
featured_image: https://i.ytimg.com/vi/Jk3UckZSBBk/mqdefault.jpg
tags: [ unity3d ]

---

{{% youtube id="Jk3UckZSBBk" %}}

Lets make a visual upgrade for our basic flight controller we build in the last video. We're going to make our ship rotate in the direction it is moving so its not just a cube moving up and down the screen!

To control the rotation we'll add a fourth component to our flight controller that is designed specifically to handle this visual effect. It will read from the previously defined `ShipInput` and apply a smooth rotation to an "art" placeholder object. The smooth rotation is accomplished using a `Quaternion.Slerp` combined with the `Time.deltaTime`. This creates a a smooth curve towards the target angle that slows down the closer it gets to the target angle.

This video does a good job of demonstrating the different between a Lerp (Linear Interpolation) and a Slerp (Spherical Linear Interpolation): https://youtu.be/uNHIPVOnt-Y

The World of Zero Discord channel is open to anyone. You can join and talk software engineering, development and more: https://discord.gg/hU5Kq2u