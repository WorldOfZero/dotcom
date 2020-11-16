---
title: "Building a Basic Flight Controller - Lets Make a Side Scrolling Shooter - Part 1"
aliases: [/v/xO2LTbAMFNQ/]
date: 2018-06-14
featured_image: https://i.ytimg.com/vi/xO2LTbAMFNQ/mqdefault.jpg

---

{{% youtube id="xO2LTbAMFNQ" %}}

Let's build a Side Scrolling Shooter. In this video we'll start by building the controls for a simple flight controller that will let us move up and down in a limited space smoothly. We'll look at how to set up the components best to make this approach scale well and more.

There are three main components we'll build in this video:

* `ShipInput`
* `ShipInputController`
* `ShipMotionController`

## `ShipInput`

The Ship Input is a simple component designed to only hold the values of the current input. Effectively it's a state machine and used as the communication layer between the `ShipInputController` and `ShipMotionController`.

## `ShipInputController`

The Ship Input Controller interacts directly with an input device (in this case Unity's Input object) and sets values in the `ShipInput`. This allows the Input to be sent from multiple, different sources without breaking the consumption of the input itself.

## `ShipMotionController`

The Ship Motion Controller is the "actor" in this implementation. It reads the `ShipInput` that was set by the `ShipInputController` and translates that into action in the scene. In this case it moves the player up or down respectively.

---

To prevent the player from going outside of the bounds we'll take advantage of the `Mathf.Clamp` function. This will make it possible to clamp the players position to within the upper and lower bounds easily.

Join the World of Zero Discord channel to talk programming, game making and more: https://discord.gg/hU5Kq2u