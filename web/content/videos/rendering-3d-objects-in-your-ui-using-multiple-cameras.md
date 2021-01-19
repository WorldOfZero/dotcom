---
title: "Rendering 3D Objects in your UI Using Multiple Cameras"
aliases: [/v/tACRIWcCzK8/]
date: 2018-12-11
featured_image: https://i.ytimg.com/vi/tACRIWcCzK8/mqdefault.jpg
tags: [ unity3d,tutorial ]

---

{{% youtube id="tACRIWcCzK8" %}}

One issue that is often encountered when building first person games is that the really close objects like weapons or hands will clip through nearby walls. To solve this a common trick is to create a second camera that selectively renders all the objects that you want in the foreground on top of the background. In this video we're going to explore how that can be done.

Unity's Camera objects have a number of really handy flags on them that allow you to tweak a number of different settings about them. We're going to need to take advantage of a few of them.

The first is the `clear flags` option which tells the camera what to clear before drawing. To accomplish our overwrite effect we'll want to set the second foreground camera's `clear flags` to "Depth Only". This clears the depth so newly drawn objects aren't culled by the depth buffer but doesn't overwrite the previously drawn scene.

The second option is the `culling mask` this determines which layers the camera will draw.  For example setting the `culling mask` to only the "UI" layer will cause that camera to only draw objects in the "UI" layer and ignore everything else. 

The final option we care about is the cameras depth. This isn't a measure of the camera's physical depth in the scene but is instead an measure of the order of the camera when multiple camera's exist. Camera's are ordered from least to greatest and then drawn in order one after the other. This means that a camera with a depth of 1 is drawn after a camera with a depth of 0. At the time of writing this Camera depths may range from -100 to 100.

By combining these three options we can create a camera that renders on top of the existing scene, is rendered after the main camera and only renders a specific layer of objects. By doing this we can allow objects to pop through the terrain and effectively ignore everything else in the scene.

Unity has a few other tips and tricks for cool things you can do with cameras here: https://docs.unity3d.com/Manual/MultipleCameras.html

The World of Zero Discord server: https://discord.gg/hU5Kq2u