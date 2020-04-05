---
title: Using C#s Yield Keyword
date: 2019-08-28T15:57:02.000Z
tags:
  - c#
  - tutorial
  
featured_image: https://i.ytimg.com/vi/bsZjfuTrPSA/mqdefault.jpg
---

{{< youtube id="bsZjfuTrPSA" >}}

C#'s Yield operator allows you to define enumerable sets which can be dynamically generated and are lazily evaluated. This enables a number of fun things that would be difficult otherwise such as infinite lists. Some other frameworks have also taken advantage of `yield` to power different features like [Unity 3D's Coroutines](https://docs.unity3d.com/Manual/Coroutines.html).

When used in a function or property which returns an `IEnumerable`, yield will provide two features. You may `return` the next value in the set or `break` out of the loop - effectively terminating the set. Values `return`ed from a `yield` keyword are composed into the enumerable set as your code evaluates. Yield statements are evaluated lazily (meaning the function generating the enumerable object is not generated completely before the first element is returned), this means that after returning with `yield` the code in the function will continue from the point it returned from including preserving the state (such as local variable values).

Using these concepts we can create a function which returns all positive integers between 1 and a max value.

```csharp
// Note: you'll need to replace the IEnumerable{int} with correct syntax as well as the ≥ symbol.
public static IEnumerable{int} PositiveInts(int max) {
    int i = 1;
    while(true) {
        yield return i++;
        if (i ≥ max) {
            yield break;
        }
    }
}
```

* `yield return`: returns the next value in an `IEnumerable`.
* `yield break`: marks the end of the `IEnumerable`.

More information about using `yield` with some other examples is available here: https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/yield

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u