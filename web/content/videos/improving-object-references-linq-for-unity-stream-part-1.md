---
title: "Improving Object References - LINQ for Unity Stream - Part 1"
aliases: [/v/2gdETd_2ryc/]
date: 2021-06-24
featured_image: https://i.ytimg.com/vi/2gdETd_2ryc/mqdefault.jpg
tags: [ livestream,csharp,dotnet,unity3d,livecode ]

---

{{% youtube id="2gdETd_2ryc" %}}

LINQ for Unity is a new tool I'm building that allows you to run C# queries, typically LINQ, that you can then use to modify objects in your scenes easily. This allows you to select all of the Colors of your scenes Lights for example and easily edit them all or quickly change the positions of objects that meet a certain criteria.

One of the challenges the tool is currently facing is handling value types. These are common in Unity and occur when any primitive types (like `float`, `int`) or any structs (like `Vector3`, `Color`) are used. Instead of reference types which point to the location of data a value type will copy data when it is assigned. This means that if we try to select all of an objects positions that we will only retrieve the **values** of those positions. These values are read-only and if we do change them they will not effect the Transform they are a member of.

In this stream we will be designing, prototyping and building a solution to this value type problem using reflection and exploring other alternatives.

This is from a Live Stream I did on Twitch! You can follow me there to get notified the next time I go live: https://twitch.tv/worldofzerodev
Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u