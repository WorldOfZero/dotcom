---
title: "Using Generic Type Aliases in C#"
aliases: [/v/48jSjqhevw4/]
date: 2021-04-20
featured_image: https://i.ytimg.com/vi/48jSjqhevw4/mqdefault.jpg
tags: [ csharp,dotnet,tutorial ]

---

{{% youtube id="48jSjqhevw4" %}}

C# includes a feature that allows you to use the `using` keyword to define aliases for different types or namespaces in your code. This can allow you to provide explicit names for generic types you might reuse often so they are more understandable or easier to type. The feature creates a **generic type alias** that you may use in the place of the full type name.

For example, we can define and use a `List` of `string`s like this:

```csharp
using Strings = System.Collections.Generic.List<string>;

Strings MakeStringList() {
    return new Strings() {
        "World of Zero"
    }
}
```

This feature can also be used to alias namespaces to help you disambiguate classes with the same name from different namespaces without rewriting the full namespace each reference.

```csharp
using Essentials = WorldOfZero.Unity.BallisticEssentials;
using Sys = System;

void UseMathClass() {
    Essentials.Math.CalculateAngleOfImpact(...);
    Sys.Math.Cos(...);
}
```

***

I've uploaded other projects on my website at https://worldofzero.com
Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u