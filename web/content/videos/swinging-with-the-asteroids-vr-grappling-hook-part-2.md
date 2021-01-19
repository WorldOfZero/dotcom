---
title: "Swinging with the Asteroids VR Grappling Hook - Part 2"
aliases: [/v/GRnALgoI8-4/]
date: 2018-05-31
featured_image: https://i.ytimg.com/vi/GRnALgoI8-4/mqdefault.jpg
tags: [ vr,xr,unity3d,csharp,dotnet ]

---

{{% youtube id="GRnALgoI8-4" %}}

Part 2 of building the Asteroids VR Grappling Hook. In this video we're going to swing! Picking up from the previous video in the series we're going to modify our grappling hook projectiles to actually attach a Spring joint between the player and wall they impact. This will allow us to add force to the player and pull them towards whatever they grab.

To accomplish this we'll need to find a rigidbody that can represent our player and figure out a good way to attach the Spring to that rigidbody. Turns out this isn't as straight forward as I had predicted. We'll experience some really fun spring bugs that happen when we don't connect the other end of the spring as well as try to figure out a simple way to identify the correct player rigidbody to use. For this to work we'll need a none-kinematic rigidbody that has some relationship to the actual play-space.

Once we have that done it's just an experiment of testing different values for the best experience.

We have a World of Zero Discord channel you can join! Come talk development, debugging and more: https://discord.gg/hU5Kq2u