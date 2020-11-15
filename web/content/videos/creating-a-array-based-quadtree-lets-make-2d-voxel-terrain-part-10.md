---
title: "Creating a Array Based Quadtree - Lets Make 2D Voxel Terrain - Part 10"
date: 2017-03-06
featured_image: https://i.ytimg.com/vi/yWXyBgegm2U/mqdefault.jpg

---

{{% youtube id="yWXyBgegm2U" %}}

Software development is a constant cycle of creating really cool new things and fixing really broken old things. This video is all about the later. We're going to be updating our voxel terrains quadtree and making it even better. Specifically we're going to be optimizing our memory allocation and working on getting all of our data located in one place. This isn't the last step of optimization, but it's an important one to take because it's going to make our marching squares algorithm easier to implement. Though perhaps still not without its issues.

We're going to work on changing our linked quadtree implementation to instead use an array based implementation very similar to how a heap is implemented. The difference here is that we are using a quadtree instead of a binary tree so some modifications are required.

There are some drawbacks to this implementation. The first: we lose the advantages of our sparse quadtree. We could technically bring it back, but we lose any memory saved by a sparse implementation. This also means that all operations have the same cost regardless of the tree structure. We aren't saving operations anymore by compressing our tree.

We also don't get into profiling in this video. That means we don't actually have any real numbers to compare this to. The goal there is to complete the Voxel Terrain implementation then abstract out an interface and use abstraction to enable either. Once that is done we can add one more implementation (a flat 2D array) and then compare all three using a variety of different tests. This will tell us which implementations perform best in each scenario. That entire testing plan though will have to wait for quite some time.


Apologies for the length, usually I try to keep things condensed but also try to complete them in a single video. Rather than split this into two there is just a single longer video. I was able to cut it down by about half the recording time, but it's still pretty long. Let me know what you'd prefer when this occurs in the future.

Also note to self: buy thing that charges camera while recording. Or spare batteries...