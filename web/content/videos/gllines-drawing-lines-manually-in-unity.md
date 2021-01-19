---
title: "GL.Lines - Drawing Lines Manually in Unity"
aliases: [/v/s926MfazI50/]
date: 2017-11-21
featured_image: https://i.ytimg.com/vi/s926MfazI50/mqdefault.jpg
tags: [ unity3d,game,csharp,dotnet,tutorial,livecode ]

---

{{% youtube id="s926MfazI50" %}}

You use Unity's Gizmos all the time for debugging and your app. What if you want those lines in play mode? Unity Gizmos can't render in play mode.

Lets implement our own version of a line renderer using the built in GL calls included with Unity. This will allow us to create a custom line renderer that can be used for both Gizmos and while we are playing our game. Pretty neat!

To do this we'll leverage the GL calls I mentioned previously and take advantage of Unity's Camera.OnPostRender() method (more info here: https://docs.unity3d.com/ScriptReference/Camera-onPostRender.html) so we can draw our lines as a part of our scene and have them behave exactly as we intend them to.

Grab the code for this Gizmo style line renderer on GitHub here: https://gist.github.com/runewake2/b4b7bf73485222f7c5a0fe0c91dd1322

Discord: https://discord.gg/hU5Kq2u