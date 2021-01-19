---
title: "Live Coding a Basic 6 Degree of Freedom Flight Controller"
aliases: [/v/sCSnitP6xPo/]
date: 2021-01-15
featured_image: https://i.ytimg.com/vi/sCSnitP6xPo/mqdefault.jpg
tags: [ csharp,dotnet,livecode,unity3d ]

---

{{% youtube id="sCSnitP6xPo" %}}

A six degree of freedom (6DoF) system describes one where a player is able to freely move along the X, Y and Z axis as well as yaw, pitch and roll their rotation. Unlike what you might encounter when rotating a player in a standard FPS when they can't do flips in the air and are generally only allowed to fully rotate around the Y (up) axis a 6DoF game creates a few unique challenges. This prevents you from relying on something like `Quaternion.Euler` because representing rotation in only 3 dimensions introduces the potential for gimble locking. Instead rotations need to be based on quaternion math - this enables you to rotate your objects freely without introducing unexpected behavior.

The basics of my 6DoF controller look like this:

```csharp
// Handle movement
this.transform.position += this.transform.forward * input.thrust.z * thrustSpeed * Time.deltaTime;
this.transform.position += this.transform.right * input.thrust.x * thrustSpeed * Time.deltaTime;
this.transform.position += this.transform.up * input.thrust.y * thrustSpeed * Time.deltaTime;

// Handle rotations
this.transform.rotation *=
    Quaternion.AngleAxis(rotationSpeed * Time.deltaTime * input.rotation.x, Vector3.right);
this.transform.rotation *=
    Quaternion.AngleAxis(rotationSpeed * Time.deltaTime * input.rotation.y, Vector3.up);
this.transform.rotation *=
    Quaternion.AngleAxis(rotationSpeed * Time.deltaTime * input.rotation.z, Vector3.forward);
```

The `input` object is defined with this interface:

```csharp
interface IPlayerInput {
   public Vector3 thrust { get; }
   // Rotation is stored by the axis it will rotate around.
   public Vector3 rotation { get; }
}
```

When multiplying two rotation quaternions together the right hand side of the operation is performed relative to the left hand side. This is why we use absolute angles here (`Vector3.right`, `Vector3.forward` instead of `this.transform.right` and `this.transform.forward`). More about this in [Unity's documentation](https://docs.unity3d.com/ScriptReference/Quaternion-operator_multiply.html) or my video that covers using [Unity Quaternion operators](https://worldofzero.com/videos/rotation-math-tricks-using-unitys-quaternion-operators/).

Gimble locking occurs when two or more of the axis of rotation align with one another causing the available rotations the object can take to be limited (multiple rotations cause the same overall effect on the object). You can learn more about this effect on Wikipedia: https://en.wikipedia.org/wiki/Gimbal_lock

I've been a big fan of 6DoF games since I was really young and draw a lot of inspiration from games like Descent, Overload and more. The style of games are really fun and I highly recommend giving one a try if you've never played one before.

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u