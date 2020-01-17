---
title: Tracking Rigidbody Velocity in Asteroids VR
date: 2019-07-15T17:33:42.000Z
tags:
  - world of zero
  - lets make
  - asteroids vr
  - asteroidsvr
  - vr
  - asteroids
  - asteroid vr
  - asteroid
  - velocity tracker
  - virtual reality
  - steamvr
  - unity
  - unity (game engine)
  - unity game dev
  - unity engine
  - unity game
  - game development
  - live coding
  - rigidbody
  - canvas
  - unity ui
  - velocity
  - debugging
  - coding
  - unity 3d
  - rigidbody velocity
  - Building Asteroids VR
  - htc vive
  - steam vr
  - openvr
  - UnityEngine.UI.Text
  - UI
  - user interface
  - xr
  - unity xr
  
featured_image: https://i.ytimg.com/vi/MDT6VV56vNk/mqdefault.jpg
---

{{< youtube id="MDT6VV56vNk" >}}

In order to better track and debug in Asteroids VR I'd like to be able to track how fast the player is moving at any point in time. To do this we're going to add a simple tracking UI that displays our current velocity in meters per second and kilometers per hour using a canvas with a single Text element in it.

In order to grab the `velocity` we can just pull out the magnitude of the Rigidbody's `velocity`. Then to set this up we can calculate the our mps and kph values and assign the results to our Text object.

Check out more videos on the development of Asteroids VR: https://www.youtube.com/playlist?list=PLEwYhelKHmig7HVi7_WahwXRWPycEJ5xC

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u