---
title: "Creating a Mouse Controlled Flashlight"
aliases: [/v/zKXYo9IWVFs/]
date: 2025-05-07
featured_image: https://i.ytimg.com/vi/zKXYo9IWVFs/mqdefault.jpg
tags: [ unity3d,csharp,dotnet ]

---

{{% youtube id="zKXYo9IWVFs" %}}

Lets take a look at how we can use Unity's `Camera.ScreenPointToRay` function to adjust the rotation of a spotlight to always point where our mouse is located on the screen. This effectively gives us a flashlight we can move around the screen by moving our mouse but doesn't require us to physically rotate the camera as well allowing us to create useful effects for games like point and click adventures or detective games.

The script we're using to orient our flashlight looks like this:

```csharp
var ray = Camera.main.ScreenPointToRay(Input.mousePosition);
RaycastHit hit;
if (!Physics.Raycast(ray, out hit))
{
    return;
}

var targetPosition = hit.point;
var direction = (hit.point - lightTransform.position).normalized;
lightTransform.rotation = Quaternion.LookRotation(direction);
```

You can learn more about using `Camera.ScreenPointToRay` in the Unity scripting documentation: https://docs.unity3d.com/ScriptReference/Camera.ScreenPointToRay.html

We've used this technique in the past to create a spaceship that we could drive around the screen using our mouse. You can see that previous project's video here: https://youtu.be/yOnth9uTLlA

Cyclomatic Complexity is a topic we briefly mention here, it gives a way to estimate the structure and complexity of a program by giving us a way to measure how many distinct paths through our code exist and the complexity of those branching paths. You can read more about it here: https://en.wikipedia.org/wiki/Cyclomatic_complexity

***

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u