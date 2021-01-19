---
title: "Texturing our Voxels - Lets Make 2D Voxel Terrain - Part 9"
aliases: [/v/_YSOwajeFqA/]
date: 2017-02-17
featured_image: https://i.ytimg.com/vi/_YSOwajeFqA/mqdefault.jpg
tags: [  ]

---

{{% youtube id="_YSOwajeFqA" %}}

Time to start adding some color to our voxel terrain! In this video we're going to use a shader to apply 3 unique textures to our voxels. This will allow us to add some color and hopefully some detail to things. This is the last piece of the puzzle before we start working on marching squares and at this point is perfectly acceptable if you only wanted to build a Terraria style or block based 2D terrain. Other modifications may help improve performance but where we are is quite acceptable.

In order to build this texturing solution we are going to use the vertex colors of our voxel mesh to determine what "type" our voxels are. Red, Green and Blue each will represent different voxel types. We'll then write a shader to look up and use those vertex colors. In the future this may allow us to blend between different material types, but right now it allows us to very easily insert different styles of blocks. In order to store the blocks another change is required: we must store our voxels as integers instead of booleans so that we can keep track of the type of voxel we have at each point.

We still have a lot to do to really make this texturing come alive but that will need to wait until we get our new mesh generation logic working. We'll start that next! Onwards to Marching Squares!