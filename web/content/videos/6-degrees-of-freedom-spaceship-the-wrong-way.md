---
title: "6 Degrees of Freedom Spaceship - The WRONG Way"
aliases: [/v/C7PtRXH3e-Y/]
date: 2017-11-16
featured_image: https://i.ytimg.com/vi/C7PtRXH3e-Y/mqdefault.jpg
tags: [ unity3d,csharp,dotnet,livecode ]

---

{{% youtube id="C7PtRXH3e-Y" %}}

A 6 Degree of Freedom controller is capable of six types of movement. It can move along the X, Y and Z axis but also has Yaw, Pitch and Roll. A spaceship is a good example.

We're going to take a look at one of the ways I've implemented them in the past and one of the more obvious ways to attempt to implement movement in 6 degrees of freedom. Using Euler Angles (rotation along the X, Y and Z axis) to control the ships rotation. This kind of solution can cause Gimble Locking where multiple planes overlap reducing the potential movements we can make and causing weird issues to occur such as rotation flipping when we look more than straight up and non-linear movement as different axis change. The issues are obvious, but the cause isn't always.

We'll take a look at what Gimble Locking is and what causes it as well as use the Flight Controller we make to demonstrate the weird behaviors.

Grab the Flight Controller code from GitHub here to try this out yourself: https://gist.github.com/runewake2/59256e503fa8c960ccef7157c994aa37

The spaceship models and textures in this video are from this free asset from the Unity Asset Store: https://www.assetstore.unity3d.com/en/#!/content/29459

Discord: https://discord.gg/hU5Kq2u

If we want to get to space this isn't the solution but it's a step in the right direction. Now we just need to figure out the right solution!  Got an idea or already solved this? I'd love to see what you've come up with!