---
title: "Simple Volumetric Spotlight Renderer Using Dynamic Meshes"
alias: [/v/nX682vFtT6I/]
date: 2017-10-04
featured_image: https://i.ytimg.com/vi/nX682vFtT6I/mqdefault.jpg

---

{{% youtube id="nX682vFtT6I" %}}

Volumetric Lighting is cool! But it's complex and expensive. What if we could do it, or at least come close without the expensive calculations? That's what we're going to build here.

This approach uses a simple mesh generated based on the spotlight it's attached to and a simple additive shader to create simple volumetric lighting. The color of our volume light is controlled using basic mesh features, specifically the vertex color for the four point cone.

Obviously there are some things this approach can't do. It isn't occluded by the terrain, doesn't cast shadows and is a bit uniform to represent dust in the air. However, it's a really simple effect that can fit into a number of games with very little extra effort.

The code we wrote in this video is included with the Unity Visualizations git repository: https://github.com/WorldOfZero/UnityVisualizations

Discord: https://discord.gg/hU5Kq2u