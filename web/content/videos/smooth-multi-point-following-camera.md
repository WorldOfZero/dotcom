---
title: "Smooth Multi-Point Following Camera"
date: 2017-07-16
featured_image: https://i.ytimg.com/vi/iccMGaIlE5o/mqdefault.jpg

---

{{% youtube id="iccMGaIlE5o" %}}

You have multiple characters or points that you want on camera. How do you do that? This is how.

This solution solves the problem of keeping multiple objects on screen by creating a dynamic camera that tracks a rectangle. This rectangle is created by the min/max of the XY positions of tracked objects. Once the rectangle is created a border is added around the outside so the players aren't on the edge of the screen. By moving the camera to the center of this we get a good XY position. To solve for the Z coordinate of our camera we need to project out the camera a certain distance. What distance depends on the field of view of our camera and can be solved using a formula kindly provided by Unity already (link below). This allows us to precisely calculate the distance in order to fit our rectangle on the visible screen.

Once we have all three of those coordinates we know where to position our camera, then it's just about moving it there.

The unity documentation page we got the frustum calculations from is here: https://docs.unity3d.com/Manual/FrustumSizeAtDistance.html

Discord: https://discord.gg/hU5Kq2u