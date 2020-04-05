---
title: Inline Initializing C# Dictionaries - Quick Tip
date: 2019-02-12T07:45:00.000Z
tags:
  - c#
  - tip
  - tutorial
  
featured_image: https://i.ytimg.com/vi/lFsgmxzw7IU/mqdefault.jpg
---

{{< youtube id="lFsgmxzw7IU" >}}

C# allows you to seed data into your dictionary when it's constructed by using an initializer function that accepts a series of key, value pairs after its constructor that causes those elements to be automatically inserted into your Dictionary's for you. This is a really handy way to initialize your dictionaries if you already know what you expect to be a part of them or want to use a Dictionary as a lookup table for example.

An example of what this might look like:

```csharp
// Note: replace angled brackets with correct character!
var myList = new Dictionary⟨string,string⟩() { {"key", "value"}, {"key2", "value2"} };
```

Doing this traditionally would look like this:

```csharp
// Note: replace angled brackets with correct character!
var myList = new Dictionary⟨string,string⟩();
myList.Add("key", "value");
myList.Add("key2", "value2");
```

This trick also works for Lists! Here's how: https://youtu.be/F11BhVjmyd0

Join the World of Zero Discord server: https://discord.gg/hU5Kq2u