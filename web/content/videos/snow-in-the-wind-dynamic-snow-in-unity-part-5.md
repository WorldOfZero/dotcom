---
title: "Snow in the Wind - Dynamic Snow in Unity - Part 5"
aliases: [/v/V5trpRR4UMc/]
date: 2018-03-20
featured_image: https://i.ytimg.com/vi/V5trpRR4UMc/mqdefault.jpg
tags: [ unity3d,tutorial,livecode,csharp,dotnet ]

---

{{% youtube id="V5trpRR4UMc" %}}

Let's add wind! The goal is to make snow "flow" across the land over time and create drifts from indentations. It also makes filling in the holes left behind by people or things in the snow more dynamic than just rising back up! Now it has direction and is a lot more dynamic.

For this test we're going to only solve this for linear wind across the X axis. We'll sample from both sides of the current position and use two simple rules to determine how snow flows in our environment.

1. If the place the snow is coming from has more snow than the current position than move some of the snow from the previous position to the current one.
2. If the place the snow is going towards has less snow than the current position than remove some snow from the current position.

This causes snow to "drift" across the ground over time, almost as if it's smeared across the ground by a brush. The effect is really cool! For a proof of concept I'd say it worked out well.

Apologies for the crunchy audio. I tried to fix it but there wasn't much to work with unfortunately.

Join the World of Zero Discord channel: https://discord.gg/hU5Kq2u