---
title: Modifying Vectors with Matrices
date: 2019-04-17T06:59:17.000Z
tags:
  - world of zero
  - lets make
  - matrix
  - vector
  - unity
  - unity 3d
  - matrix multiplication
  - matrix4x4
  - unity matrix
  - matrix math
  - rotate vector
  - rotating vectors
  - unity (game engine)
  - vector math
  - math
  - Rotating a Vector in 3D
  - Rotate Vector3
  - Vector3
  - Rotation matrix
  - rotating a vector
  - quaternion
  - matrix translation rotation scale
  - matrix.trs
  - linear algebra
  - asteroids vr
  - asteroid belt
  - OnValidate
  - Linq
  - Unity Gizmos
  - matrix rotation
  - matrices
  - vertices
  - how to
  - example
  
featured_image: https://i.ytimg.com/vi/zpjlL-w3748/mqdefault.jpg
---

{{< youtube id="zpjlL-w3748" >}}

Matrices are an extremely powerful tool when working with vectors. They're the magic that makes a lot of the code in our shaders work, but they also work in a lot of handy other places. For this video we're going to look into using a matrix to rotate a ring of vectors around a single point. This will allow us to simulate an asteroid ring or something else as we want.

To do this we'll generate a list of vectors (using some sin and cosine stuff to make them a circle). Once we have that list of vectors we can multiply them by a rotation matrix every frame to slowly rotate the points in a circle. That's really it. It's not a complex project, but it's a handy experiment. The goal here is to be able to create a large scale asteroid belt by using these matrices as a force on the asteroids instead of manually applying force to each individual asteroid.

*It's also a fun way to play with matrices 😁*

The way we're using Matrices in this example is effectively how a parented `GameObject` works in Unity by applying it's own matrix (it's transform) to its children. The main difference is that our solution does not require additional `GameObject`s or other Unity specific features. It's just math.

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u