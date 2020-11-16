---
title: "Rotating Unity Gizmos - Quick Tip"
alias: [/v/4-eTwIyntcQ/]
date: 2019-01-31
featured_image: https://i.ytimg.com/vi/4-eTwIyntcQ/mqdefault.jpg

---

{{% youtube id="4-eTwIyntcQ" %}}

Gizmos are a really handy way to indicate a whole range of interesting information during development of your project. However the default draw commands for most Gizmo's don't make it possible to specify a rotation. How can we rotate our Gizmo's to improve the information they can convey?

Unity accepts a matrix as a state of the Gizmos. This makes it possible to alter the scale, rotation and position of every gizmo you draw. Think of this like Gizmo's being children Game Objects to a shared parent object located at the center of the game (0,0,0), with zero rotation and one scale on each axis. By modifying the matrix we are moving where that Gizmo containing object is located and by doing so effecting *every* Gizmo drawn in the same function.

A quick example which draws a Cube that will rotate with the game object it's attached to:

```csharp
Gizmos.matrix = this.transform.localToWorldMatrix;
Gizmos.DrawCube(Vector3.zero, Vector3.one);
```

If you'd like to define your own Matrix by providing a position, rotation and scale you can use the `Matrix4x4.TRS()` function. Here's an example that creates a matrix to locate the object at the Game Object's position but rotate all the Gizmo's by 45 degrees on the y axis.

```csharp
Gizmos.matrix = Matrix4x4.TRS(this.transform.position, Quaternion.Euler(0,45,0), Vector3.one);
```

This is a new style I'm trying and I'd love your feedback! Let me know what you think in the comments or in our Discord!

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u