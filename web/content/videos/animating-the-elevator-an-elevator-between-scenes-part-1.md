---
title: "Animating the Elevator - An Elevator Between Scenes - Part 1"
aliases: [/v/96iaO7kl2Xg/]
date: 2021-04-07
featured_image: https://i.ytimg.com/vi/96iaO7kl2Xg/mqdefault.jpg
tags: [ unity3d,tutorial ]

---

{{% youtube id="96iaO7kl2Xg" %}}

Let's start a new project that allows us to load scenes using riding an elevator as the transition. To start with we'll be building the animation controlling the opening and closing of the elevator doors. We'll be using Unity's Animation Controllers for this which means we'll be building the entire effect without writing a single line of code (or opening a code editor).

Unity's Animation Controller works like a state machine that tracks a set of properties and handles transitioning between a set of states (Animations) using transitions. We can make this state machine as complex as we'd like but for our purposes a state machine with only two states is enough to capture our goal. One state will be when the elevator doors have completely opened, and another state will represent when the doors have closed. Unity will automatically blend between animation states for us during the transition period which means that both of our animations can be a single keyframe representing the position the elevator doors should be in.

You can see my video on using Unity's Async Scene Loading features [here](https://worldofzero.com/videos/learning-async-unity-scene-loading/).

{{% youtube id="Oq2ytDvHTYM" %}}

***

The Unity Animator Controller is documented here: https://docs.unity3d.com/Manual/class-AnimatorController.html
Unity has published a tutorial series on learn.unity.com about using the animator controller: https://learn.unity.com/tutorial/animator-controllers-2019-3
Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u