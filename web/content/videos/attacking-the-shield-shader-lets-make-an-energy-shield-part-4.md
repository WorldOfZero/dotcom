---
title: "Attacking the Shield Shader - Lets Make an Energy Shield - Part 4"
aliases: [/v/wou-47wEkyQ/]
date: 2018-01-08
featured_image: https://i.ytimg.com/vi/wou-47wEkyQ/mqdefault.jpg

---

{{% youtube id="wou-47wEkyQ" %}}

We have a shield shader, but how do we get it to interact with the world. More plainly: how can we shoot our shield? Today we're going to make that possible.

We'll use raycasts to build projects and also take advantage of Unity's SendMessage function to invoke messages on the impacted elements. A simple way to send information about our projectile to the objects we hit with it. We'll also take advantage of Unity's WorldToLocalMatrix to transform the impact point into object space positions that have the correct rotation, scale and translation for drawing.

The end result? A shield that we can shoot no matter it's rotation, scale or location and get an accurate simulation.

Discord: https://discord.gg/hU5Kq2u