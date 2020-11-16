---
title: "Custom Unity Inspector Mesh Renderer"
alias: ["/v/TPGFnk8guL8"]
date: 2017-08-21
featured_image: https://i.ytimg.com/vi/TPGFnk8guL8/mqdefault.jpg

---

{{% youtube id="TPGFnk8guL8" %}}

How would you make a custom mesh preview window? If you were planning on building it it might look like this!

This implementation takes advantage of the UnityEditor's PreviewRenderUtility which allows you to build and render a sample scene to a texture. Then we can draw that texture to the screen just like we would do with any other texture.

To use a PreviewRenderUtility we need to create a new camera and also sync up the directional light from our scene to the light used for the preview (this and a tweak to include skybox rendering makes the lighting match our current scene). Then we can throw in some additional tweaks to cause the rendered mesh to rotate and we have a fully working sample window that can be placed anywhere a texture might go.

For this example we'll render it as the background of an EditorWindow, but we could just as easily put those renders anywhere.

I can't actually find any information about the Preview Render Utility documented on Unity's documentation page. This may be one of those features you aren't really supposed to use.

Want to catch up on Unity Shell? Check out the other videos that got us to this point! https://www.youtube.com/watch?v=xJi5R3rxzPU&list=PLEwYhelKHmihiq5U0MSZj1Uh8TNernql5

Discord: https://discord.gg/hU5Kq2u