---
title: "Lets Make a Pixelated Image Effect"
date: 2017-04-17
featured_image: https://i.ytimg.com/vi/9bTFVaKGIIQ/mqdefault.jpg

---

{{% youtube id="9bTFVaKGIIQ" %}}

Implementing an image effect is actually fairly straight forward in Unity. All it requires is a simple shader and a script with OnRenderImage specified. That's not hard at all either, because you only need a single call to Graphics.Blit() to get things started!

Image effects can be used for a whole range of cool things from bloom and ambient occlusion to god rays and more. In this video we're going to implement a simple pixelation image effect that allows you to reduce the resolution of your scene in either the X or Y dimension independently.

An image effect is an effect that is applied after the original scene has been rendered. This allows you to apply "lens" style effects that are based on the perception of the scene instead of the rendering of the objects in the scene itself. Well tuned image effects can dramatically change how your scene and game look.


Makin' Stuff Look Good is a really cool channel all about visual effects and shaders. There are a ton of reverse engineered effects from popular games like Winston's Shield from Overwatch, the World Scan ability from No Man's Sky and more. I'd recommend checking out his work if you want to learn more about that kind of stuff: https://www.youtube.com/channel/UCEklP9iLcpExB8vp_fWQseg


Some of the updates from the end of this video:
1. Ludum Dare is coming up! It ought to be fun and I encourage you to try to make something. http://ludumdare.com/compo/
2. Data Cube is now running entirely on .NET Core which means we can bring it to our Raspberry Pi. Hopefully before Ludum Dare so we can run it during that.
3. More Voxel Terrain is coming, compute shaders have been a bit... difficult. There is still more I'd like to do with this, but it's just taken time.