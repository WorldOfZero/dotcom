---
title: "Real Time Voxel Updates - Lets Make 2D Voxel Terrain - Part 6"
date: 2017-02-07
featured_image: https://i.ytimg.com/vi/YSIN1HZsgAk/mqdefault.jpg

---

{{% youtube id="YSIN1HZsgAk" %}}

Today we're going to be making the voxels in our 2d voxel terrain update in real time! This means we're going to make it so that we can easily insert and delete elements from our tree and also modify things so we're able to regenerate our mesh when that happens. This will let us draw on our quadtree with our mouse as if it's a pencil and create new voxel nodes as we go.

In order to tie all of this together we're going to take advantage of C#'s event feature so that we can notify other objects in our game when the quadtree is inserted. We'll use this to notify our Quad Mesh Creator when we update the data. This will regenerate and redraw our mesh dynamically for us.

This is a big step for us. It proves our concept. We can update our quadtree and get an actual result and we can do it in real time while still getting more than 60 frames per second without even optimizing anything yet. That's pretty awesome. It's starting to show that our little hypothesis about how to make voxels is actually turning into a real solution which is really exciting.

It shouldn't be long before we get to start turning this quadtree of voxels into real data and using it in real games. That's going to be a ton of fun!