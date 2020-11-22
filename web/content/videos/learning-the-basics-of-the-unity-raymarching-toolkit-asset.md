---
title: "Learning the Basics of the Unity Raymarching Toolkit Asset"
aliases: [/v/QDfqgG8HJDQ/]
date: 2018-05-16
featured_image: https://i.ytimg.com/vi/QDfqgG8HJDQ/mqdefault.jpg

---

{{% youtube id="QDfqgG8HJDQ" %}}

Lets take a look at the recently released Raymarching Toolkit for Unity and some of the powerful things you can do with it. The Raymarching Toolkit brings raymarching to your games and enables you to very easily create a scene built from raymarched objects instead of traditional triangle based geometry. The advantage of this is twofold: 1. all the shapes are math based, if you can write a math formula you can create a shape and 2. you can create smooth curved surfaces unlike with meshes. There are some limitations to this power however: raymarching is expensive and can be slow, some mesh shapes do not fit well with basic mathematical formula and new shapes can not be instantiated at runtime (the objects in your scene are static).

The most powerful feature of the Raymarching Toolkit is its powerful abstraction layers. Shapes and blending between shapes are all defined with custom formulas that you can either modify or create new versions of. This means if the shape you want to draw doesn't exist you can build it!

Getting started with the Raymarching Toolkit is also extremely easily. Add the asset to your project and then add a Raymarched Object Game Object to your scene, this creates everything you need to get started and begin working with the Raymarching Toolkit.

> Note: I am running this on a Nvidia 1080Ti. Raymarching can be expensive and performance may suffer on slower cards.

You can learn more about the Unity Raymarching Toolkit here including additional examples and guides: https://kev.town/raymarching/

The World of Zero Discord Channel: https://discord.gg/hU5Kq2u