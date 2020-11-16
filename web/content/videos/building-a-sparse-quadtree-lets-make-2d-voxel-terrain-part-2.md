---
title: "Building a Sparse Quadtree - Lets Make 2D Voxel Terrain - Part 2"
alias: ["/v/Y1pIzUehmb4"]
date: 2017-01-26
featured_image: https://i.ytimg.com/vi/Y1pIzUehmb4/mqdefault.jpg

---

{{% youtube id="Y1pIzUehmb4" %}}

Last episode we built a quadtree from our previous octree implementation. That was cool but now it's time for some real fun! Lets make that quadtree into a sparse quadtree! What's that? Think of it as a quadtree, but only for the places where actual data exists. We will in the parts we need and ignore everything else. For data with a lot of empty space such as terrains this can be really helpful because we don't have to dedicate a lot of time and resources to considering all the empty space.

In addition to building a sparse quadtree we're also going to be making our original quadtree useful so we can actually insert data into it. This and the sparse nature of the tree go hand-in-hand and we'll implement both of them together! We don't have a way to delete anything from our terrain yet and we probably won't for a while but what we can do is start inserting points into the tree and debugging things to make sure everything is functioning as we intended.

The next steps now that we have a fairly solid data structure in place are to begin building our actual voxels. We'll start by completely randomly generating the tree and build up from there to something more complex. The next few steps in no particular order: build a terrain, generate the mesh, gener

Catch up with part 1 of building our Quadtree here: https://www.youtube.com/watch?v=RkLI0s7phyU