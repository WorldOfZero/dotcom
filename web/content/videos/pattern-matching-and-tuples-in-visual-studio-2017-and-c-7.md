---
title: "Pattern Matching and Tuples in Visual Studio 2017 and C# 7"
alias: ["/v/PQucU3VFiBA"]
date: 2017-03-08
featured_image: https://i.ytimg.com/vi/PQucU3VFiBA/mqdefault.jpg

---

{{% youtube id="PQucU3VFiBA" %}}

Visual Studio is now 20 years old and the next generation of C# has also recently been released. We're going to explore two of the features I've been most excited about in C# 7: Tuples and Pattern Matching! To do this we're going to start simple and make a basic Fizz Buzz application.

Lets talk about the new concepts we're working on here.

Tuples: https://docs.microsoft.com/en-us/dotnet/articles/csharp/tuples
Tuples are new value types that allow you easily store groups of data. Unlike the previous implementation of Tuples, this one is a lot more efficient and has the benefit of symantic typing. This means you can actually name your values instead of getting stuck with generic names like Item1, Item2 etc. Also, since these are first level language features now you get to use them easier and with less overhead. Huzzah!

Pattern Matching: https://docs.microsoft.com/en-us/dotnet/articles/csharp/pattern-matching
Pattern Matching gives you the ability to very easily convert and save types as well as check conditions. This means you can do a value test and assign in a single call. It also supports extending switch statements. This means you can switch on the same value multiple times and add conditionals if you'd like. It opens up a lot and we certainly aren't pushing the boundaries of what pattern matching allows you to do.

Want to jump right to code? Here is the code from this video available on GitHub: https://gist.github.com/runewake2/6489f4b3b021dbcb90c6d86953b6e8ab