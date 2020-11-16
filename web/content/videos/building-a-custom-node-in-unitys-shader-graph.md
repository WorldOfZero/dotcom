---
title: "Building a Custom Node in Unity's Shader Graph"
alias: [/v/FeL4uWGdtUY/]
date: 2018-12-03
featured_image: https://i.ytimg.com/vi/FeL4uWGdtUY/mqdefault.jpg

---

{{% youtube id="FeL4uWGdtUY" %}}

With the introduction of Shader Graph Unity also added support for Custom Nodes you can build yourself by creating custom `CodeFunctionNode`. By extending this class we're able to create our own Nodes in Shader Graph that we can extend or implement in any way. In our example here we'll be creating a very simple linear interpolation between two colors, effectively reimplementing the existing `Lerp` or `Branch` nodes depending on what you are looking for.

The cool thing about this is it allows you to really easily extend Shader Graph with cool new functions, add missing features and more. I don't think this API is quite to the level of allowing you to add support for Tessellation or Geometry Shaders (that doesn't seem to be the goal here), instead it makes a somewhat accessible way for you to extend your tooling and help expand it.

That said, there are some issues here. Nodes that no longer compile are removed from the graph which feels a bit... awkward. And the default API relies on reflection to function completely. I feel like this could have been wrapped in many of the modern dependency injection style of models without requiring reflection as a significant part of the API. Still, it's nice to be available.

The code developed during this video is available here: https://gist.github.com/runewake2/68423db7c32d80993333a1c932f032d1

The official blog post on Shader Graph Custom Nodes can be found here: https://blogs.unity3d.com/2018/03/27/shader-graph-custom-node-api-using-the-code-function-node/

Unity goes into even more depth on the CodeFunctionNode on their GitHub page: https://github.com/Unity-Technologies/ShaderGraph/wiki/Custom-Nodes-With-CodeFunctionNode

Join the World of Zero Discord channel: https://discord.gg/hU5Kq2u