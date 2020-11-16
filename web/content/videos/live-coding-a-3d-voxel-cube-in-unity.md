---
title: "Live Coding a 3D Voxel Cube in Unity"
aliases: [/v/laBPpyXfBWo/]
date: 2018-07-11
featured_image: https://i.ytimg.com/vi/laBPpyXfBWo/mqdefault.jpg

---

{{% youtube id="laBPpyXfBWo" %}}

Lets build a basic colored voxel "chunk" from start to finish! We'll focus on constructing three main components: a Chunk which stores data about the world, A ChunkGenerator which fills the Chunk with initial information (it builds the world) and a MeshGenerator that converts our Chunk into a Mesh you can see. This isn't necessarily an efficient implementation (actually, I can assure you it is not) but hopefully we can set up a strong foundation to build and expand from into really cool new problems. By separating the generation of our Chunk from the generation of the Mesh we can modify either the Mesh or World generation independently with minimal overhead making expanding and adding onto this foundation simple.

There is still a LOT that is not in this implementation. Half of our triangles are generated with the wrong Vertex winding causing them to appear backwards, we have no normals configured so lighting doesn't really work either. There is also a pretty significant mistake where we regenerate our mesh once for every single cell in the Chunk. For a simple 10x10x10 cube that will result in 1000 mesh generations even though we just need 1. My bad! We'll fix that in the next video in this series.

There are a lot of places we can take this, if you have any ideas or suggestions let me know or take the code your own path. Let me know in the comments or join our Discord to walk through any problems you run into.

You can browse the code from this video on GitHub: https://github.com/WorldOfZero/UnityVisualizations/tree/master/BlockTerrain

Come Join the World of Zero Discord: https://discord.gg/hU5Kq2u