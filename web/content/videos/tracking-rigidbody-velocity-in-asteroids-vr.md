---
title: "Tracking Rigidbody Velocity in Asteroids VR"
aliases: [/v/MDT6VV56vNk/]
date: 2019-07-15
featured_image: https://i.ytimg.com/vi/MDT6VV56vNk/mqdefault.jpg
tags: [ vr,xr,unity3d,livecode,debugging ]

---

{{% youtube id="MDT6VV56vNk" %}}

In order to better track and debug in Asteroids VR I'd like to be able to track how fast the player is moving at any point in time. To do this we're going to add a simple tracking UI that displays our current velocity in meters per second and kilometers per hour using a canvas with a single Text element in it.

In order to grab the `velocity` we can just pull out the magnitude of the Rigidbody's `velocity`. Then to set this up we can calculate the our mps and kph values and assign the results to our Text object.

Check out more videos on the development of Asteroids VR: https://www.youtube.com/playlist?list=PLEwYhelKHmig7HVi7_WahwXRWPycEJ5xC

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u