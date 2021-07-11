---
title: "Using AnimatedValues in Custom Unity Editors"
aliases: [/v/jfhCaijXm6M/]
date: 2021-07-11
featured_image: https://i.ytimg.com/vi/jfhCaijXm6M/mqdefault.jpg
tags: [ dotnet,csharp,unity3d ]

---

{{% youtube id="jfhCaijXm6M" %}}

When working with the Unity editor it can be useful to animate the movement of a value from one place to the next. Unity provides a series of classes you can use in the editor to help accomplish that. These classes will linearly interpolate from their current value to the target value you've given them. This can be used to smoothly move the camera in your scene or take advantage of the animated `EditorLayout.BeginFadeGroup` in an intuitive way - a control that can collapse and expand on itself using the value of a float.

These classes have a variety of values.

* `speed`: This effects how quickly the AnimatedValue transitions to the `target` value.
* `target`: The target of that the AnimatedValue is transitioning towards.
* `value`: The current value of the object.
* `valueChanged`: This is an event handler that is invoked when the AnimatedValue is transitioning between values. This can be used to trigger Editor GUI Repaint's or react to the animation in other ways.

One example of using this in an editor is to initialize and add a listener to automatically `Repaint` during an update. Unity does not redraw the editor window on a consistent basis and needs to be "Repainted" in order for the updates to show. Interactions like moving the window or interacting with your mouse can trigger Repaints, but since we're trying to animate an object in our UI, subscribing to the `valueChanged` event allows us to ensure a smooth appearance.

```csharp
animatedField = new AnimBool(false);
animatedField.valueChanged.AddListener(Repaint);
```

The value of the `AnimBool` can be retrieved using the `animatedField.faded` property. This is a special property of animated boolean values that returns a floating point representation of the boolean animation. The value will be between 0 (`false`) and 1 (`true`).

These classes are part of the UnityEditor library and are not available in your compiled game. For that you'd need to implement a class that provides the functionality you need.

Browse the `UnityEditor.AnimatedValues` API:
- [`AnimBool`](https://docs.unity3d.com/ScriptReference/AnimatedValues.AnimBool.html)
- [`AnimFloat`](https://docs.unity3d.com/ScriptReference/AnimatedValues.AnimFloat.html)
- [`AnimQuaternion`](https://docs.unity3d.com/ScriptReference/AnimatedValues.AnimQuaternion.html)
- [`AnimVector3`](https://docs.unity3d.com/ScriptReference/AnimatedValues.AnimVector3.html)

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u