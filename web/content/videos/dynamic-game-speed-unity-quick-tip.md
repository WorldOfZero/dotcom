---
title: "Dynamic Game Speed - Unity Quick Tip"
alias: ["/v/6zACdGL10Dc"]
date: 2020-01-20
featured_image: https://i.ytimg.com/vi/6zACdGL10Dc/mqdefault.jpg

---

{{% youtube id="6zACdGL10Dc" %}}

You are able to modify the speed of most objects, animations and physics using a single value: `Time.timeScale`. Modifying this value from it's default (`1`) causes the game to run slower (values less than 1) or faster (values greater than 1).

An important note of using this: adjusting the Time Scale does not effect the framerate of your game (at least not directly). It will scale the results of `Time.deltaTime` and `Time.fixedDeltaTime` and reduce the speed of animations and physics in your scene.

## Some Examples

### Stop Time

```csharp
Time.timeScale = 0;
```

### Half Speed

```csharp
Time.timeScale = 0.5f;
```

### Normal (Default) Speed

```csharp
Time.timeScale = 1;
```

### Double Speed

```csharp
Time.timeScale = 2
```

## References

The original Dice Roller video is here: https://www.youtube.com/watch?v=hmDF9PvMDVw

You can read more about using `Time.timeScale` on Unity's documentation site: https://docs.unity3d.com/ScriptReference/Time-timeScale.html

I use the Warrior Pack Bundle 1 to demo this. It's available as a paid and free asset.
- Paid: https://assetstore.unity.com/packages/3d/animations/warrior-pack-bundle-1-35924
- Free: https://assetstore.unity.com/packages/3d/animations/warrior-pack-bundle-1-free-36405

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u