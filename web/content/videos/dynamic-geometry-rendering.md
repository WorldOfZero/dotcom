---
title: "Dynamic Geometry Rendering"
alias: ["/v/IBKNQVdV2FE"]
date: 2017-04-06
featured_image: https://i.ytimg.com/vi/IBKNQVdV2FE/mqdefault.jpg

---

{{% youtube id="IBKNQVdV2FE" %}}

Time for another really fun exploration of the World of Zero Arcade. We're changing the project slightly and focusing on an abstract SHMUP game based around geometry. To kick things off we're going to focus on building the geometry itself. This is going to be done almost exclusively with Unity's Line Renderer.

To get that working fully we're going to need to build something that can render basic geometric shapes. We'll start there and, using steps around a circle create uniform polygon's that we can render to the screen. That's the easy part.

Next we will move on to animating the shape so that as vertices get added or removed from the shape we can dynamically adjust the vertex positions of the shape efficiently and smoothly. The end goal here is a fully dynamic uniform polygon drawn using a unity line renderer that can adjust it's number of points at run time and handle those changes smoothly. For the most part we accomplish precisely that! 

Lots of fun post effects in this project. I'm using the free Post Processing Stack asset coming directly from Unity! You can get it straight from the Unity Asset Store here: https://www.assetstore.unity3d.com/en/#!/content/83912

The World of Zero Arcade is open source! Check it out: https://github.com/WorldOfZero/Arcade