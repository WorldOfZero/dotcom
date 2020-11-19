---
title: "Bulk Insertion into a Quadtree - Lets Make 2D Voxel Terrain - Part 7"
aliases: [/v/6WYm8DT97Kg/]
date: 2017-02-09
featured_image: https://i.ytimg.com/vi/6WYm8DT97Kg/mqdefault.jpg

---

{{% youtube id="6WYm8DT97Kg" %}}

Today we're going to be designing and implementing an algorithm which can be used to insert data into our quadtree using some sort of conditional logic. This is going to allow us to insert data into our quadtree without having to iterate over every node. Instead we're able to exclude nodes which fall outside of our given filter more quickly.

This algorithm works by starting at the root node of our quadtree. We check if the node contains the given position, if it does we repeat the step for each sub node in the tree (subdividing if necessary). If the node is outside of the filter then all of it's children will be as well and they can be excluded. We repeat this process until we reach the leaf nodes, if the leaf node is inside of our filter than it should be included in the result set.

With this algorithm we're able to start setting data within our quadtree using a variable sized circle instead of at a single point. Better still, this code runs blazingly fast. In a scene running only a quadtree with a height of 7 we're able to top 300 frames per second in the unity editor. That's not too bad and it's only going to get faster as we continue to optimize our quadtree and mesh generation algorithms in future videos.

For now though, we have a major step in our destructible voxel terrain. We can finally blow things up properly!