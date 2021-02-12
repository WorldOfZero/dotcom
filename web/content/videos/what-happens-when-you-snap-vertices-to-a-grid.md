---
title: "What Happens When You Snap Vertices To A Grid?"
aliases: [/v/e8NItqF_9hQ/]
date: 2021-02-10
featured_image: https://i.ytimg.com/vi/e8NItqF_9hQ/mqdefault.jpg
tags: [ shader,unity3d,livecode ]

---

{{% youtube id="e8NItqF_9hQ" %}}

In this video I get to play with madness. We'll be exploring what happens if you try to "pixelate" a 3D mesh using a vertex shader. Everything in my mind is telling me this won't work and will create a *ton* of issues, but there's only one way to find out. Lets explore this idea together and use it to dive into vertex shaders in Unity 3D and some of their uses.

The general idea of this approach is to create a fixed size grid that we want to snap each of our vertices to. In order to accomplish this we can use a rounding trick I like to use. This trick involves expanding our objects by the grid size we're trying to accomplish, rounding the values, and then shrinking the values back down. For example if we have values between 0 and 1 (0, 0.25, 0.5, 0.75 for example) and we want to snap these values to a grid size of `0.1` we can divide the values by `0.1` (0, 2.5, 5, 7.5), round them (0, 3, 5, 8) and then multiply by `0.1` again (0, 0.3, 0.5, 0.8). This allows us to keep the same range of values while giving us control over the resolution of those values. We also use this technique in the [pixelated image effect](https://youtu.be/9bTFVaKGIIQ) from an earlier video on the channel.

When this grid snapping is applied against a mesh there are a few additional decisions we need to make. This includes what coordinate space we want to perform the operation in. Coordinate spaces describe an object relative to that space. For example an object space representation is an identical representation for each version of that object whereas a world space version of the same object would describe the unique position, rotation and scale of that object in the world. Which coordinate space we decide to create our grid in will effect the final result: if we snap vertices in object space then even as that object is rotated or moved through the world the rounded vertices will not change. However if we perform the grid snapping in world space the final results will change as the object is moved and rotated through the world. Depending on the effect we want to achieve different coordinate spaces may be more appropriate. For our testing purposes though we'll just use object space since this is the most straightforward to implement.

The vertex shader code that snaps to a grid looks like this (this is the surface shader implementation):

```shader
void vert(inout appdata_full v) {
    v.vertex /= _GridSize;
    v.vertex = round(v.vertex);
    v.vertex *= _GridSize;
}
```

> Note: the syntax is slightly different between the Surface Shader and Vertex Shader implementations however the principals are the same. Both implementations are demonstrated in the video.

You can view the entire playlist of implementing this effect here: https://www.youtube.com/playlist?list=PLEwYhelKHmiixWR3Tn5dYt1iUlSCL6OFq

***

More Visual Effects we've built on World of Zero: https://www.youtube.com/playlist?list=PLEwYhelKHmig6ttzH0nRL3OOQsGLtVrtX
Unity's Surface Shader examples: https://docs.unity3d.com/Manual/SL-SurfaceShaderExamples.html
If you're interested in learning more about coordinate spaces (object space/world space/etc) this article goes into a bit more depth and also describes the relationships between the different coordinate spaces: http://davidlively.com/programming/graphics/coordinate-spaces/
The Bomber Bug asset is located here: https://assetstore.unity.com/packages/p/bomber-bug-pack-pbr-63127
Come chat in the World of Zero Discord Server: https://discord.gg/hU5Kq2u