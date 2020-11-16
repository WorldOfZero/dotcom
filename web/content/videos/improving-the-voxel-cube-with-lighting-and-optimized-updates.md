---
title: "Improving the Voxel Cube with Lighting and Optimized Updates"
alias: [/v/9_bZn0aNVPQ/]
date: 2018-07-24
featured_image: https://i.ytimg.com/vi/9_bZn0aNVPQ/mqdefault.jpg

---

{{% youtube id="9_bZn0aNVPQ" %}}

One of the big advantages of recording yourself building things is you get to watch it all back, a built in code review while you edit. Sometimes you notice some mistakes or things you've overlooked. That's the case here. Our Voxel Terrain that we designed previously has a few flaws and we're going to fix them. Specifically we're going to focus on two issues: lighting and fixing the extra mesh generation bug that exists in the original implementation.

To make our lighting work we'll add normals to our mesh and fix the triangle winding - the direction that the vertices are oriented relative to one another - to make shadows render correctly. We actually mess this up as well 😭 and have our normals in the wrong orientation. However, we _do_ get working lighting and correctly rendering shadows with this work. This includes self shadowing which is nice, it behaves just like any other mesh would in Unity.

A bigger problem, the one that caused the crash at the end of the first video was how we generated our meshes. We had implemented it to regenerate a mesh whenever a block inside our chunk changed. The problem is, when we are regenerating an entire chunk we need to change every block. The side effect of this is that every single block being generated caused a new mesh to be generated. This means that instead of generating the single mesh we wanted we generated the Width of our Chunk cubed meshes and immediately discarded all but the last. This was a *massive* use of time and caused a lot of slowness when generating these meshes. We're going to fix that by reworking how we send Block Update messages (we'll use Unity Events) and make it possible to update all blocks in a Chunk before sending an update.

Come join the World of Zero Discord channel!  https://discord.gg/hU5Kq2u