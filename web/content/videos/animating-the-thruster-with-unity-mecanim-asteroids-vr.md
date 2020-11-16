---
title: "Animating the Thruster with Unity Mecanim - Asteroids VR"
aliases: [/v/4FuLNf5uSSA/]
date: 2016-12-21
featured_image: https://i.ytimg.com/vi/4FuLNf5uSSA/mqdefault.jpg

---

{{% youtube id="4FuLNf5uSSA" %}}

It's time to open up Mecanim and work on getting our thruster animated. We have two major parts to animate right now fans in the center of the thruster and the iris opening at the bottom. Both are controlled by the power of thrust. For the mechanical iris at the bottom we'll be using Mecanim's Blend Tree's, for the fans a script to rotate the fan.

Neither of these solutions are going to work well. The model is still a work in progress so the fan blades aren't correctly placed and are not grouped. That means our rotation won't work. It will also break pretty much everything near the end. Ignoring that fact, things go pretty well as they usually do when you ignore all the problems you encounter.

All and all a successful failure. Neither of these features are finished by the end of this video and both are still quite broken. However, they're in a position somewhat near where I want them to be and that's good enough.

The code for Asteroids VR is open source and available for your reference here: https://github.com/WorldOfZero/Jet-Warrior