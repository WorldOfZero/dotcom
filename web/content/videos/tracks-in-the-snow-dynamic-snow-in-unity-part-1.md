---
title: "Tracks in the Snow - Dynamic Snow in Unity - Part 1"
aliases: [/v/z7kQpUZXXhw/]
date: 2018-02-07
featured_image: https://i.ytimg.com/vi/z7kQpUZXXhw/mqdefault.jpg
tags: [ unity3d,shader ]

---

{{% youtube id="z7kQpUZXXhw" %}}

You walk through a snow drift or throw a grenade into it. How do you deform it so your footprints last? We're going to try implementing that using a Tessellation shader combined with a second camera that is used for depth testing. The advantage of this approach is that it gives us precise collision information for our terrain and allows us to work with full 3D meshes. The down side is we need to render that part of our scene twice.

This is the first part of a series on building a dynamic snow system. For now we're going to focus on the displacement of snow, so you can step on the snow and it crushes under your feet. At this point however it will not persist state (unless we use the camera trick we demonstrate at the end using no-clear). We also aren't going to be able to simulate snow falling and filling in the tracks we left over time.

What about that weird bug with the depth based render texture? Do you know why the tessellation and fragment shaders were doing different things? What was I missing?

Getting started with Tessellation, here are some example shaders built by Unity to get you started: https://docs.unity3d.com/Manual/SL-SurfaceShaderTessellation.html

More about capturing depth textures with render textures and what each setting means: https://docs.unity3d.com/Manual/SL-CameraDepthTexture.html

Join the conversation on the World of Zero Discord server: https://discord.gg/hU5Kq2u