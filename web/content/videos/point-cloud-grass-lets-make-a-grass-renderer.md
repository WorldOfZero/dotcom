---
title: "Point Cloud Grass - Lets Make a Grass Renderer"
date: 2017-05-09
featured_image: https://i.ytimg.com/vi/b2AlyCNbYmY/mqdefault.jpg

---

{{% youtube id="b2AlyCNbYmY" %}}

Lets say you want to render grass. A LOT of grass. How would you do it? In this video we're going to try to solve that using a point cloud and a geometry shader.

We have already written and tested a version of this using Unity's instanced rendering ( https://www.youtube.com/watch?v=0H1FVOphmIo) and it worked alright, but that system caps out at a few thousand instances before we run into CPU issues with sending the data to the GPU every frame. We can do better!

The general idea is to create a point cloud (think a mesh but without the vertices connected to one another) where each vertex in the mesh is a point where we want to draw grass. We will use that to store the position and direction (normal) of the grass. Then we'll write a shader that takes advantage of a geometry shader to create a quad at each point in our point cloud. For now these quads are our grass. Once we have that we just need to assign some UV's and we're ready to roll!

This method is WAY faster than the previous instanced version. Instead of being able to render a few thousand grass instances we're able to draw hundreds of thousands of grass planes with almost zero impact on the CPU. It also has the side effect of making it really easy to add grass on pretty much any model (just apply the shader to that mesh).

We do lose a few things with this approach though. Notably we lose the ability to use Unity Surface Shaders which means we have no lighting yet and the lighting we do implement will need our own implementation. Still, the sheer performance of this solution is immense!

If you have any other ideas on how we could improve this grass or other uses for the point cloud rendering we started with I'd love to here it!


I'll be uploading this grass shader to the Unity Visualization project on GitHub. You can grab the shaders and code from this video and other visual effects there. I've also started adding Issues to the projects there and would encourage you to do the same! It seems like that will be a better way to collect feedback and feature requests. You can create a new issue or comment on the existing ones through this link: https://github.com/WorldOfZero/UnityVisualizations/issues


Still working on playing with the Audio behind. Let me know what you think of the music and mixing in the comments and I'll do my best to tweak it.

Music Credits:
"Bit Quest" Kevin MacLeod (incompetech.com)
Licensed under Creative Commons: By Attribution 3.0 License
http://creativecommons.org/licenses/by/3.0/