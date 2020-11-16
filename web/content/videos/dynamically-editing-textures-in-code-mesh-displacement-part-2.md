---
title: "Dynamically Editing Textures in Code - Mesh Displacement - Part 2"
aliases: [/v/xjG4sA3v5yM/]
date: 2017-01-10
featured_image: https://i.ytimg.com/vi/xjG4sA3v5yM/mqdefault.jpg

---

{{% youtube id="xjG4sA3v5yM" %}}

In order to dynamically modify our mesh with a displacement map we'll need an actual displacement map. We already are generating the texture but it's just a boring black. Let's make it a bit more interesting! To do that we need to be able to translate our collision positions into texture space. Once we get that things are more or less done.

In order to get the texture coordinates of a collision point we use dot products to calculate it. This can be done using the planes right and up vectors and taking the dot product of the difference between the plane's origin and the collision point. This gives an X and Y location which can be modified to result in the proper UV coordinates.

After we get the correct position all that is left is to draw to the actual texture. This will get us a bunch of hard white lines directly underneath our object collisions. This texture is then our displacement map. In the next video we'll look into actually modifying the vertices in our shader using the map.