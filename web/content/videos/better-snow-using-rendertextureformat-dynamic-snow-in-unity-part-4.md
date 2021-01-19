---
title: "Better Snow Using RenderTextureFormat - Dynamic Snow in Unity - Part 4"
aliases: [/v/bbrBa1zPXtg/]
date: 2018-03-06
featured_image: https://i.ytimg.com/vi/bbrBa1zPXtg/mqdefault.jpg
tags: [ unity3d ]

---

{{% youtube id="bbrBa1zPXtg" %}}

We have terrain that deforms as you step on it and recovers over time but we have a problem. Currently our snow can only regenerate over time extremely quickly. If we regenerate too slowly floating point errors prevent anything from happening at all. We're going to fix that!

Right now we have a double buffered simulation which writes out our physics/deformation data to a texture using a compute shader. The two render textures used in the buffer are both ARGB32 formatted. This means that every color receives 8 bits and the texture includes 4 channels for red, green, blue and alpha. We need more depth and only use a single channel in our simulation. This means we can change the render texture format into something that better fits our needs. Specifically we can use RFloat, which dedicates all 32 bits to storing a single floating point value on the red channel.

This change enables us to recover our snow much more slowly without encountering as significant of floating point errors. The handy thing is that it's quite easy to make this change as well.

Here is a list of the RenderTextureFormat's Unity offers: https://docs.unity3d.com/ScriptReference/RenderTextureFormat.html

Want to catch up on how we got to this point? Here is the Snow Shader terrain https://www.youtube.com/playlist?list=PLEwYhelKHmig37twXTbU5ksXeEXmGjUsM

Discord: https://discord.gg/hU5Kq2u