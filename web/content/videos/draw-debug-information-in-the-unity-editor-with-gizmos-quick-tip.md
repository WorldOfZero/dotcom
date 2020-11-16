---
title: "Draw Debug Information in the Unity Editor with Gizmos - Quick Tip"
aliases: [/v/S7HfszIEAAY/]
date: 2019-05-10
featured_image: https://i.ytimg.com/vi/S7HfszIEAAY/mqdefault.jpg

---

{{% youtube id="S7HfszIEAAY" %}}

Unity makes it possible to draw simple debugging information in your scene and even in-game while using the Unity Editor using Gizmos. Gizmos can be used to visualize many different things and allow you to render Cubes, Spheres, Lines and more. This is great if you want to mark points of interest, plot out your objects pathfinding or show the trajectory of projectiles in your game. The options are entirely up to you!

To add Gizmos to a `MonoBehavior` you can add an `OnDrawGizmos` function to the `MonoBehavior`. An example might look like this to draw a unique marker at the position of every `GameObject` with the `MonoBehavior` attached to it.

```csharp
void OnDrawGizmos() {
    Gizmos.color = Color.blue;
    Gizmos.DrawSphere(transform.position, 1);
    
    Gizmos.color = Color.white;
    Gizmos.DrawWireSphere(transform.position, 1.1f);
}
```

Gizmos will draw through most objects in the scene so they can be seen even when normal objects would be occluded by other objects.

By default `OnDrawGizmos` will always draw. However if you would like to draw Gizmos only when the object is selected in the Editor you may use `OnDrawGizmosSelected` in place of `OnDrawGizmos`. This functions the same way as `OnDrawGizmos` but is only called when you have selected the object.

One use for `OnDrawGizmosSelected` can be to change the color of the drawn object for selected objects. This code draws selected objects in white, and others in red:

```csharp
void OnDrawGizmos() {
    Gizmos.color = Color.red;
    Gizmos.DrawSphere(transform.position, 1);
}

// Invoked if Gizmos are enabled and the object is selected
void OnDrawGizmosSelected() {
    Gizmos.color = Color.white;
    Gizmos.DrawSphere(transform.position, 1);
}
```

More information about the functions available for drawing Gizmos in Unity: https://docs.unity3d.com/ScriptReference/Gizmos.html

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u