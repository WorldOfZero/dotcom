---
title: "A World Space Grid Snapped Shader"
aliases: [/v/4xR46-YI828/]
date: 2021-02-12
featured_image: https://i.ytimg.com/vi/4xR46-YI828/mqdefault.jpg
tags: [ unity3d,shader,tutorial ]

---

{{% youtube id="4xR46-YI828" %}}

Expanding upon our exploration of a shader that snaps vertices to a grid. This time we're moving things into world space!

By moving the grid snapping into world space positions we actually gain a few fun things! For example it means that multiple different objects with the shader applied will actually merge together cleanly in world space (in essence, all objects will share a global grid space in our scene). This makes the results a lot more consistent and prevents things like rotating or scaling an object from skewing the results. This also means that we get pretty interesting results when we apply the effect to more complex objects like a particle system, in this case we can create a series of flowing snapped cubes with particles.

Compared to the previous grid snapped shader we need to add two lines. One to move our vertices into World Space and another to move back into Object Space after our operations have been applied.

```diff
  void vert(inout appdata_full v) {
+    v.vertex = mul(unity_ObjectToWorld, v.vertex);
     v.vertex /= _GridSize;
     v.vertex = round(v.vertex);
     v.vertex *= _GridSize;
+    v.vertex = mul(unity_WorldToObject, v.vertex);
  }
```

You can view the entire playlist of implementing this effect here: https://www.youtube.com/playlist?list=PLEwYhelKHmiixWR3Tn5dYt1iUlSCL6OFq

***

The variables I use (`unity_ObjectToWorld` and `unity_WorldToObject`) are documented here along with a number of other useful built-in shader variables: https://docs.unity3d.com/Manual/SL-UnityShaderVariables.html
You can find a collection of other Visual Effects we've explored on the channel here: https://www.youtube.com/playlist?list=PLEwYhelKHmig6ttzH0nRL3OOQsGLtVrtX
The animated model is from the "Mecanim Warrior Anim Free" package on the asset store - this effect should work on any object that you can apply the material to though. https://assetstore.unity.com/packages/p/mecanim-warrior-anim-free-6127
Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u