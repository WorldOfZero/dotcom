---
title: "Color Contrast Shader - Lets Make a Side Scrolling Shooter - Part 3"
date: 2018-07-02
featured_image: https://i.ytimg.com/vi/jJcSbixSy5c/mqdefault.jpg

---

{{% youtube id="jJcSbixSy5c" %}}

Continuing to build out our side scrolling shooter. We're going to be building an effect that is essential to one of the main mechanics I am trying to build for this game. A contrast between two colors that allows you to damage one but makes the other invulnerable. You'll need to switch at the correct time to effectively eliminate enemies. The effect will be composed from a simple shader based off of the same concepts from the [dissolving shader](https://youtu.be/rGt9haUx-aQ) we built previously.

Our shader is based off of this formula.

```
weight * colorA + (1 - weight) * colorB;
```

This formula uses a weight to balance between two colors. We can modify this by using a boolean value for the weight which will make it 1 when the boolean is true or 0 when the boolean is false. This will make it possible to turn our gradient between two colors into a hard transition instead.

We can modify our material in C# using code like this in order to animate it from code:

```csharp
material.SetFloat("_Transition", currentTransitionState);
```

Join the World of Zero Discord server: https://discord.gg/hU5Kq2u