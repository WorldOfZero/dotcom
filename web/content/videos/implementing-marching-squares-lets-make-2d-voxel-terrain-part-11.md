---
title: "Implementing Marching Squares - Lets Make 2D Voxel Terrain - Part 11"
aliases: [/v/KngA-rV4H9w/]
date: 2017-03-08
featured_image: https://i.ytimg.com/vi/KngA-rV4H9w/mqdefault.jpg

---

{{% youtube id="KngA-rV4H9w" %}}

We're finally there! Time to add the marching squares algorithm to our voxel terrain. Unlike our previous implementation marching squares is going to look at the four nearest points in our quadtree and treat them as vertices. Then based on the configuration of those vertices one of 16 different solutions will be used. The end result of this will be angled and complex pieces including sides, corners and more. We actually get a good enough image out of this that we can use the generated mesh as a thumbnail for this video and things actually look alright.

The focus in this video is solely on getting our marching squares implemented. The code is actually pretty gross and we'll want to do quite a bit of refactoring before we deploy this into production, however the actual mesh generation part works like a charm.

On the todo block next is some fun work with compute shaders to allow us to destroy this terrain using texture based masks. Might be worth exploring pulling this entire mesh generation algorithm into a compute shader as well. Never used them, no idea how useful that would be.

For now though, we have a CPU based marching squares implementation that, while the code is gross and needs improvement, does work to generate our voxel meshes.


Want to learn more? Here are some references to get you started!

Jamie Wong discusses how to implement metaballs using Marching Squares. Also talks about linear interpolation to increase smoothing of the mesh: http://jamie-wong.com/2014/08/19/metaballs-and-marching-squares/

Want to build this in 3D? Look for implementations of the Marching Cubes algorithm. Marching squares is just a 2D version of Marching Cubes.


I tried a new way of mixing the audio for this video. What do you think?