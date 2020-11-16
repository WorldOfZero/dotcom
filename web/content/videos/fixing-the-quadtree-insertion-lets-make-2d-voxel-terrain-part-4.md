---
title: "Fixing the Quadtree Insertion  - Lets Make 2D Voxel Terrain - Part 4"
aliases: [/v/GAf_LmI0PkE/]
date: 2017-01-31
featured_image: https://i.ytimg.com/vi/GAf_LmI0PkE/mqdefault.jpg

---

{{% youtube id="GAf_LmI0PkE" %}}

Bug fix time! Our quadtree is broken so let's fix it. There are two things broken right now that we need to fix. The first is insertion. It's not actually inserting any values into our quadtree. Since the point of data structures is to hold data that's not great. Not even ok actually, it's just 100% broken. Next is the fact that our leaf nodes aren't being detected correctly. In a normal tree a leaf node is a node without any children. That's not what we want here. We want to be able to find all of the nodes at maximum depth in our tree. So we've got two things to fix before we move on and start actually building our tree.

To do this we're going to look into debugging unity using visual studio as well as a number of other explorations into how to solve this problem. We're not making anything new so the goal here is a little different than normal. We want to fix what's broken, nothing else fancy.

Once we get things fixed we'll have a quadtree we can actually insert values into, better we'll be able to properly detect based on those values and the leaf nodes in the tree where to draw our quads from the previous video. This means we can do some cool stuff like generate the thumbnail for this video and, in the next video we'll be able to expand it with custom mesh generation to remove the dependency on the Unity quad primitive we're using right now.