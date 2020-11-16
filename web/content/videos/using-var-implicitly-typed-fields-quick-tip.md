---
title: "Using Var - Implicitly Typed Fields - Quick Tip"
alias: ["/v/01YSGK7OeVQ"]
date: 2019-02-08
featured_image: https://i.ytimg.com/vi/01YSGK7OeVQ/mqdefault.jpg

---

{{% youtube id="01YSGK7OeVQ" %}}

C# is a statically typed language meaning you must specify what type your variables are when declaring them. These types are verified by the compiler as you build your project. However, doing this can in some cases feel redundant, introduce technical debt or just not look nice. A common example might be:

```csharp
MyCoolNewClass coolClass = new MyCoolNewClass();
```

In order to avoid duplicating `MyCoolNewClass` in your code you may use C#'s `var` keyword when doing this in local fields (inside of functions for example). `var` automatically detects the type from the right hand side of your assignment and creates a new variable/field with the given type.

This isn't like creating a dynamic type - you don't lose C#'s static typing - instead the type is detected at compile time for you ensuring that you still get intellisense code suggestions, compile errors and warnings and more without having to type a little extra.

This doesn't require a constructor on the right hand side to work either. Function output is detected and will function as you'd expect in this case as well.

Because the results of this are still statically typed you must have a right hand value when using `var`.

```csharp
var myField;
```

Is not valid because the type can't be detected.

* Note: This trick only works on local fields. *

Read more about how implicit typing in C# works on MSDN: https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/implicitly-typed-local-variables

Join the World of Zero Discord server: https://discord.gg/hU5Kq2u