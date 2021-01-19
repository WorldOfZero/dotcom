---
title: "Lets Make a Mass Effect: Andromeda Style Self Building Bridge"
aliases: [/v/GaQBLD7bGCM/]
date: 2017-03-22
featured_image: https://i.ytimg.com/vi/GaQBLD7bGCM/mqdefault.jpg
tags: [ unity3d,tutorial ]

---

{{% youtube id="GaQBLD7bGCM" %}}

We're taking a ton of inspiration from Mass Effect: Andromeda in this video. Mostly because it's the last game I've played to see this effect. What effect? In the game, bridges exist which automatically construct themselves as you walk across them. The goal of this video is to build something that can replicate that behavior in our own games.

To accomplish this we're going to use dot products. A lot of dot products. In fact the entire solution is largely just a series of vector equations.

Dot products between the player and nodes of our bridge are used to calculate the relative position of our player in relation to the last created part of the bridge. Some other quick modifications are used to make sure everything stays working correctly.

The actual code required for this implementation is actually extremely minor. See the code on GitHub for reference: https://gist.github.com/runewake2/0939f7fcc16f1a85705dff847b7dec96

I'm sure this style has been done before Mass Effect, I've seen it done, but right now that's what I'm playing and it stuck in my head.

This video isn't sponsored by Bioware or Mass Effect. References to the game are just that, references so we can rebuild the effect.