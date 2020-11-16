---
title: "Interpolated Strings in C# - Quick Tip"
alias: [/v/xQYmSVbacG4/]
date: 2019-02-07
featured_image: https://i.ytimg.com/vi/xQYmSVbacG4/mqdefault.jpg

---

{{% youtube id="xQYmSVbacG4" %}}

C# has the ability to build strings in a number of ways. The simplest is concatenating them, but it's not always the easiest or best solution depending on what you're making. There's a new solution that has been recently introduced to C# that allows you to interpolate strings in a very clean and readable way by embedding variables or functions directly into strings.

An example of what using string interpolation like this might look like:

```csharp
var name = "World of Zero";
Console.WriteLine($"Hello {name}");
```

This feature became available in C# 6 and is usable in all versions after that. You may read more about it on MSDN: https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/tokens/interpolated

The World of Zero Discord Server: https://discord.gg/hU5Kq2u