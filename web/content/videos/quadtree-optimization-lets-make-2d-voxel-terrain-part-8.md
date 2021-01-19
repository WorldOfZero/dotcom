---
title: "Quadtree Optimization - Lets Make 2D Voxel Terrain - Part 8"
aliases: [/v/u_xWJBb-qT0/]
date: 2017-02-10
featured_image: https://i.ytimg.com/vi/u_xWJBb-qT0/mqdefault.jpg
tags: [ tutorial,unity3d ]

---

{{% youtube id="u_xWJBb-qT0" %}}

It's time for some optimization of our quadtree. We're going to focus on consolidating adjacent nodes that have similar values. This is going to allow us to create far more precise quadtree's at significantly reduced costs. With this implementation we'll be able to easily reduce our tree as nodes are inserted, removed or changed which, while currently a bit slower than the simple insertion, allows us to massively reduce the number of triangles we're using in our final rendered mesh. The advantage of this? We can now increase the precision of our mesh even more than it already was and the mesh we do generate has far lower redundant geometry. The disadvantage? The time complexity of this takes a pretty significant increase causing the algorithm to run fairly slowly for large insertions. However for small insertions it does run quite well.

This algorithm works by modifying our subdivision logic in two ways. The first is to make subdivisions actually insert the value into the nodes instead of returning the node and inserting later. This means node writes happen directly in the subdivide function. Not too happy with that, but we have a lot of code to clean up later already so it shouldn't be that inconvenient.

Once our values are being inserted we get to the second modification. After we have recursively subdivided the nodes and have begun bubbling back up the tree we want to analyze the values attached to the resulting nodes. If the nodes are leaf nodes and all share the same data value then we can condense those nodes and instead store the data in the current node. This pattern continues all the way up our tree.

In order to implement this we also have to change our definition of a leaf node to a node without any children instead of a node at the maximum depth. This is required because our new implementation allows us to have valid data at any level of our tree.

The next goal is to figure out how to optimize this code and get it working well for all insertion sizes. That will require a bit of thought and consideration but should be an interesting problem to solve. This algorithm isn't done by any means but we've got it working and in a great place to start actually using it for our 2D voxel terrain.