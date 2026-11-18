---
title: 'Unity: Inspector Attributes'
date: 2026-11-18
draft: false
description: Four Unity attributes that make your scripts easier to use in the Inspector - Range, Header, Tooltip and RequireComponent.
tags:
- unity3d
- unity-editor
- tip
- tutorial
---

Attributes are tags that can be added above a class or field. In Unity they change how your script appears in the Inspector without changing what the code does. Typically, I will use these as a
quality of life improvement that makes it easier to use the Unity Inspectors and setup Game Objects.

Here is a small `MonoBehaviour` that gives an example using four of them:

```csharp
[RequireComponent(typeof(Rigidbody))]
public class Mover : MonoBehaviour
{
    [Header("Movement")]
    [Range(0, 10)]
    [Tooltip("Units per second")]
    public float speed = 5;
}
```
