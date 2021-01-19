---
title: "Using Debug.DrawLine and Debug.DrawRay to Visually Debug Unity 3D - Quick Tip"
aliases: [/v/USwrSUpIgLI/]
date: 2020-03-17
featured_image: https://i.ytimg.com/vi/USwrSUpIgLI/mqdefault.jpg
tags: [ tip,unity3d,csharp,dotnet,debugging,tutorial ]

---

{{% youtube id="USwrSUpIgLI" %}}

Unity provides a series of tools for registering Debug information in our games. The most commonly used functions are the logging ones like `Debug.Log()` or `Debug.LogError()` which can print debug messages to your editors console or to a log file in published games. However there are additional features that you can take advantage of that make debugging and understanding your game a bit easier inside the Unity editor. The functions that enables this are the `Debug.DrawLine` and `Debug.DrawRay` functions. They enable you to draw lines and rays within your Unity scene view without having to manually configure Gizmos. This means you can invoke these functions from anywhere in your code and get useful visual debugging information drawn out for you. For our example we'll be using the `Update` method, but you can use this throughout your MonoBehaviors when you need to debug things.

A simple example that draws a white line in your scene view between the attached game object and a target transformation.

```csharp
Transform target; // A target game object or transform to draw a line to.
Debug.DrawLine(this.transform.position, target.position);
```

There are additional parameters you may overload the `Debug.DrawLine` function with to customize the color, draw the line for a longer period of time and modify how the line interacts with the depth of your scene. For example this will draw a cyan line or 1 second and ignore depth in your scene (the line will not be occluded by objects in front of it).

```csharp
Transform target; //A target game object or transform to draw a line to.
Debug.DrawLine(this.transform.position, target.position, Color.cyan, 1, false);
```

You can read more about the different features of `Debug.DrawLine` here: https://docs.unity3d.com/ScriptReference/Debug.DrawLine.html

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u