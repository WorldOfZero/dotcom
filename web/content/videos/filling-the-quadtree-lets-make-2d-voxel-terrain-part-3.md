---
title: "Filling the Quadtree - Let's Make 2D Voxel Terrain - Part 3"
aliases: [/v/I_h3VaRVSZc/]
date: 2017-01-31
featured_image: https://i.ytimg.com/vi/I_h3VaRVSZc/mqdefault.jpg

---

{{% youtube id="I_h3VaRVSZc" %}}

Time to put something in our quadtree. We're going to build two scripts in this video. The first will be one of potentially many "generators" which insert data into our quadtree. They "generate" the terrain. We're going to use a texture with this generator to fill out our current quadtree. The second script we're going to write is going to actually build our mesh. It will use the data built from our generator and for now fill each leaf now with a Quad. Due to some bugs there are a few issues with this. Our leaf node detection is wrong. It doesn't detect nodes at the bottom of our tree, instead it detects nodes with no subnodes. Technically still leaf nodes, but not what we are looking for. We aren't going to fix that here.

To accomplish this filling of our quadtree we aren't going to be using a mesh generation algorithm. Not yet at least. Instead we're going to use individual objects specifically created with the GameObject.CreatePrimitive() function so that we can create a quad and place it inside each leaf node. Due to the bug mentioned above this means our entire quadtree will be filled with quads. The difference? Each of those quads exactly matches the size and position of the node it's inside of.

After this the next steps are first to fix our bug with values not being inserted into our tree and leaf nodes themselves not being correctly detected. Once that's done we're going to actually have to build our mesh. Finally we'll plug in a marching squares algorithm to smooth things out. It ought to be a ton of fun to explore!