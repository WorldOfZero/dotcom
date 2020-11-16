---
title: "Experimenting With Top Down Spaceship Movement Controllers"
aliases: [/v/TUIHY-5MvWQ/]
date: 2019-01-19
featured_image: https://i.ytimg.com/vi/TUIHY-5MvWQ/mqdefault.jpg

---

{{% youtube id="TUIHY-5MvWQ" %}}

How can we turn input on a single joystick into dynamic movement of a spaceship? Let's explore two new ways we might be able to do that.

## Rotating Horizontal Movement

This controller uses the vertical movement of the controller to control thrust and the horizontal movement to control the rotation of the ship. It's a bit unintuitive because the player needs to base their inputs on the orientation of the ship and that changes every single frame. On the other hand it gives direct control to both thrust and rotation which is pretty handy, especially when you need better, more precise control.

## Dot Product Based Adaptive Movement

This controller uses dot products to calculate the thrust and rotation based on the differences between your ships rotation and the movement input from a controller. Dot products calculate the angle between two vectors. To make this work we'll need to convert the input values we have into a vector before we can use it.

To calculate thrust we can use the dot product of the ships forward vector and our input vector. This means our thrust will increase as the forward direction of the ship and the input come into alignment and slow as they become more orthogonal to one another. It also means we'll reverse automatically if the input direction is greater than 90° from the direction of the ship.

To calculate the rotation we can do a very similar calculation but plug in the ships right direction instead of the forward direction. This increases the speed of our rotation as the ship gets further out of alignment with the input, and causes it to stop turning when already headed towards the destination.

A cool side effect of this solution is that ships will automatically perform a sort of 3 point turn when the input direction is behind and to the side of the ship. The ship will back up and turn away from the target and then accelerate and turn towards it. All without having to be explicitly programmed to do that!

In my own experience I've found this control scheme works really well for top down mobile games where the inputs are limited. It gives you enough control where you feel like you're in control still, while removing some of the more complex parts of having direct control over every part of a ships navigation.

***

Source Code for this series is available on GitHub: https://github.com/WorldOfZero/top-down-spaceship

A deeper dive into Dot Products: https://youtu.be/8cZo-c-f1yc

Join the World of Zero Discord: https://discord.gg/hU5Kq2u