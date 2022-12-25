---
title: "Tracking Task Progress in Unity"
aliases: [/v/Tfyt8dynm-M/]
date: 2022-12-24
featured_image: https://i.ytimg.com/vi/Tfyt8dynm-M/mqdefault.jpg
tags: [ csharp,dotnet,unity3d,tutorial ]

---

{{% youtube id="Tfyt8dynm-M" %}}

Let's start expanding on the SVGs in Unity project we started that converts SVG's into an image format that is usable by Unity (https://www.youtube.com/watch?v=dnDz4lVbMWw) by moving the process into a background process we can track using the new Unity Progress API.

The Progress API allows us to create a progress tracker that displays the progress of long running background tasks in Unity without blocking the user while they run. This can be used to track Tasks you might run like our SVG renderer and also gives us a way to provide a feature for the user to cancel the task mid-execution.

The Unity Progress API works through a series of static methods that track Progress by a unique identifier (an `int`). These identifiers are how you can track a task over time. For example:

```csharp
Task.Run(async () => {
    int progressId = Progress.Start("My Task");
    await Task.Delay(5000);
    Progress.Finish(progressId);
});
```

We can add additional features to this as well including children tasks, step tracking, pausing and canceling tasks as well. We explore some of those throughout the implementation of the features for my own SVG generator in this video, but you can also find out a lot more about all of the features available to you in the Progress API documentation on the Unity website.

I was suggested to checkout the Progress API by Jason Storey, you can find his channel with loads of other helpful Unity and Game Dev tips at https://www.youtube.com/c/JasonStorey

You can find more information about the Unity Progress API here: https://docs.unity3d.com/ScriptReference/Progress.html

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u