---
title: "Building the Quadtree - Lets Make 2D Voxel Terrain - Part 1"
aliases: [/v/RkLI0s7phyU/]
date: 2017-01-26
featured_image: https://i.ytimg.com/vi/RkLI0s7phyU/mqdefault.jpg

---

{{% youtube id="RkLI0s7phyU" %}}

Time for a new and longer project. We're going to be building a voxel terrain system so we can replicate the kind of terrain destruction you'd get in games like Worms. We're starting small, creating a simple quadtree we can use to store our voxel data.

Why a quadtree? Good question! A quadtree, or specifically a sparse quadtree allows us to build a graph that is optimized for reading data at specific positions quickly but also able to encapsulate a large amount of data at once without requiring additional space for empty areas (this is where the sparse bit comes in). For now, we don't care too much about this but as we begin editing our data and doing other more complicated operations on it we'll need to be able to quickly access and modify the data in our graph. A quadtree allows us to do this and can be scaled up better than a flat 2 dimensional array.

In order to build our quadtree we're actually going to start with the octree base we have already created in our Unity Graph video (link below). We're mostly going to be slamming it with a hammer to drop the third dimension we no longer need. Instead of building the quadtree from scratch then we're performing an octree to quadtree conversion. This ideally would save us a lot of time. More if I actually knew what I was doing.

Now that we have our quadtree built the next step is to develop our actual voxel system. We'll look into solving that and actually building our mesh in the next videos!

Things will go smoothly he said. The other ones will crash and burn he said. Nope, the struggle is real. I have no idea what I'm doing... ¯\_(ツ)_/¯

Catch up on how we built our original octree here: https://www.youtube.com/watch?v=m0guE7804to


Fun note: If you want to make an unlimited dimensional tree instead of developing separate trees for each number of dimensions (quadtree for 2d, octree for 3d etc) you should look up K-D Tree's. They are the abstract version of this style of tree.