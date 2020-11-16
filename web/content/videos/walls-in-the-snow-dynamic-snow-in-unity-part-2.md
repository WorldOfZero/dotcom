---
title: "Walls In The Snow - Dynamic Snow in Unity - Part 2"
aliases: [/v/ksgUOfHP5do/]
date: 2018-02-06
featured_image: https://i.ytimg.com/vi/ksgUOfHP5do/mqdefault.jpg

---

{{% youtube id="ksgUOfHP5do" %}}

What if we don't want all the geometry in our scene to cause our snow to be crushed? Things like walls and buildings for example. Lets handle that using the Camera's culling mask. This allows us to modify which layers are drawn by a specific camera.

In our case we'll create a new layer for our snow interference objects. Then we configure our camera for calculating the snow height to only check the depth of those objects. This means the rest of our scene will not interfere with the snow and cause issues. It's a simple change but really enhances the capabilities of the simulation.

Discord: https://discord.gg/hU5Kq2u