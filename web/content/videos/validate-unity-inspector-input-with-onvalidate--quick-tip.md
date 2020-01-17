---
title: Validate Unity Inspector Input with OnValidate - Quick Tip
date: 2019-04-16T05:12:28.000Z
tags:
  - world of zero
  - lets make
  - OnValidate
  - Unity OnValidate
  - on validate
  - unity validate
  - unity inspector
  - unity (game engine)
  - unity editor
  - inspector
  - quick tips
  - quicktip
  - unity tip
  - quick tip
  - tip
  - how to
  - example
  - unity editor onvalidate
  - validate property changes
  - check changed inspector values
  - check for inspector updates
  - variable changes in inspector
  
featured_image: https://i.ytimg.com/vi/Jrqu7clRpec/mqdefault.jpg
---

{{< youtube id="Jrqu7clRpec" >}}

Unity provides a funtion that allows your MonoBehaviors to be alerted when values are changed on it in the inspector. The `OnValidate` method is invoked every time you modify a value in the inspector (only the inspector, changes to the value via code don't publish any alerts). This makes it possible to validate your modifications in a way that makes sense. In our example we'll use a min and max value where the min/max function as limits on one another so the min value can't exceed the max value.

An example that logs a notification every time you modify the value might look like this:

```csharp
public void OnValidate() {
   Debug.Log("The Unity Inspector Has Detected an Update");
}
```

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u