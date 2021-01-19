---
title: "Lets Make an Octree in Unity"
aliases: [/v/m0guE7804to/]
date: 2016-12-22
featured_image: https://i.ytimg.com/vi/m0guE7804to/mqdefault.jpg
tags: [ csharp,dotnet ]

---

{{% youtube id="m0guE7804to" %}}

An Octree is a 3D data structure best used for storing objects based on their 3D positions. They are used in a lot of really cool technology and form the backbone for things like Voxel renderers. We're going to be working on implementing a generic form of the Octree which we can use for any range of solutions. With this we'll be able to design all sorts of fun stuff. Recent examples include constant time lookups for gravity in our Gravity ring simulation used in Asteroids VR.

This video specifically is going to focus on creating the tree itself and will be generating a complete octree (in contrast to a sparse octree which only has detail when elements are present). This tree will be the first part of our work which will allow us to construct a tree, store information and then reference it later from our Unity game objects. We've got the graph, next is filling it.

Take the code for a spin in your own project with the source from GitHub: https://gist.github.com/runewake2/6b49d4bee40a6816f9f4f8762e36d0d4