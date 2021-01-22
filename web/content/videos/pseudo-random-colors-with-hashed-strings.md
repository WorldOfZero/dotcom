---
title: "Pseudo-Random Colors with Hashed Strings"
aliases: [/v/BHtKrZSuZMk/]
date: 2021-01-22
featured_image: https://i.ytimg.com/vi/BHtKrZSuZMk/mqdefault.jpg
tags: [ csharp,dotnet,unity3d,livecode,tutorial ]

---

{{% youtube id="BHtKrZSuZMk" %}}

In this video we're going to explore a way I approach reproducible pseudo-random number generation that uses calculated hashes to select a random item or property for an object. In this case we'll be assigning hue shifted colors to text strings. This helps easily identify elements in a list by searching for both a memorable name but also a color that will always be the same for a similar string.

To convert a string into an integer using an `MD5` hash you could write something like this:

```csharp
var stringToHash = "World of Zero";
var hasher = MD5.Create();
var hash = hasher.ComputeHash(Encoding.UTF8.GetBytes(stringToHash));
var hashedInteger = BitConverter.ToInt32(hash, 0);
```

Then to convert an integer into a random color use this. In this example 256 hues will be selected from the color wheel:

```csharp
var color = Color.HSVToRGB((Math.Abs(hashedInteger) % 256) / 256.0f, 1.0f, 0.75f);
```

This same technique can be applied to other things as well. For example we can use the hashed value to index into a lookup table of names. Other approaches could apply a specific texture to a material or instantiate a specific prefab:

```csharp
var potentialNames = new string[] { "World of Zero", "YouTube", "Unity 3D" };
var name = potentialNames[Math.Abs(hashedInteger) % potentialNames.Count];
```

---

The `System.Security.Cryptography.MD5` class is documented here: https://docs.microsoft.com/en-us/dotnet/api/system.security.cryptography.md5
More information on how hashes work on Wikipedia: https://en.wikipedia.org/wiki/Hash_function
Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u