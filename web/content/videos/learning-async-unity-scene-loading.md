---
title: "Learning Async Unity Scene Loading"
aliases: [/v/Oq2ytDvHTYM/]
date: 2021-03-19
featured_image: https://i.ytimg.com/vi/Oq2ytDvHTYM/mqdefault.jpg
tags: [ csharp,dotnet,unity3d,tutorial ]

---

{{% youtube id="Oq2ytDvHTYM" %}}

I've been working on re-learning how to work with scenes in Unity and am planning a larger project around the feature, but wanted to bring all of you on my journey. In this video we'll be learning the basics of how to work with Unity's Asynchronous Scene Loading functions. They're extremely powerful and offer some really cool opportunities for different ways to compose your scenes that we'll be looking into in the future, but for now we'll just be focusing on the basics of how to additively load a scene using synchronous (blocking) and asynchronous (non-blocking) methods. We'll also get a chance to explore Unity Coroutines - another area I am less familiar with.

Unity references Scenes in one of two ways:

* **The Build ID of the Scene**. This can be configured in your projects Build Settings.
* **The Scene Name**. This is either the file name of the scene or the full path of the scene if multiple scenes in your project have the same name.

There are two optional `LoadSceneMode`'s you can provide to Unity when loading a scene that will change how Unity handles the scene you load.

| Option | Result |
| ----------- | ---------- |
| `LoadSceneMode.Single` | All other loaded scenes are unloaded prior and a new scene is loaded. |
| `LoadSceneMode.Additive` | The new scene is loaded alongside the already loaded scenes. | 

There are different ways to load scenes asynchronously and track their progress by using an event callback on the `AsyncOperation.completed` event:

```csharp
var sceneStatus = SceneManager.LoadSceneAsync("SceneName", LoadSceneMode.Additive);
sceneStatus.completed += (e) => Debug.Log("Scene Loaded");
```

or by using a Unity Coroutine:

```csharp
public void BeginLoadLevel() {
    StartCoroutine(LoadLevelAsync());
}

private IEnumerator LoadLevelAsync()
{
    var progress = SceneManager.LoadSceneAsync("SceneName", LoadSceneMode.Additive);

    while (!progress.isDone)
    {
        // Check each frame if the scene has completed.
        // For more information about yield in C# see: https://youtu.be/bsZjfuTrPSA
        yield return null;
    }

    // Code after this point is executed after the new scene has loaded
    Debug.Log("Scene Loaded");
}
```

You can also load scenes synchronously (your game will freeze until the scene loads) by avoiding the Async versions:

```csharp
SceneManager.LoadScene("SceneName", LoadSceneMode.Additive);
```

***

Unity's documentation on using `LoadSceneAsync` is located here: https://docs.unity3d.com/ScriptReference/SceneManagement.SceneManager.LoadSceneAsync.html
The `AsyncOperation.completed` event is handled in a unique way (it will always be invoked on the proceeding frame even if the scene is loaded synchronously). You may learn more about the behavior here: https://docs.unity3d.com/ScriptReference/AsyncOperation-completed.html
Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u