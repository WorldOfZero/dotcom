---
title: "Exploring Operator Overloading a Custom String Type"
aliases: [/v/yhzBaeroj2o/]
date: 2020-04-09
featured_image: https://i.ytimg.com/vi/yhzBaeroj2o/mqdefault.jpg
tags: [ csharp,dotnet,livecode ]

---

{{% youtube id="yhzBaeroj2o" %}}

I have a really, really bad idea. I'd like to create a string that can be appended to or prepended to using custom operators. The goal here is to demonstrate the use of operator overloading, but also offer a bit of caution about creating operators that do not do the expected behavior.

Some examples of what this syntax might look like when using normal strings:

```csharp
"Hello" ) "WorldOfZero" == "HelloWorldOfZero"
"Hello" ( "WorldOfZero" == "WorldOfZeroHello"
```

*Note: I'm using parentheses here instead of angled brackets - angled brackets aren't supported in YouTube descriptions*

More information about using operator overloads is available here, including a list of supported operators: https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/operators/operator-overloading

I've put together a second video on this topic that uses this functionality for a slightly more useful reason. We create an `AppendableList` that enables you to add and remove objects using the `+` and `-` operators. You can watch that here: https://youtu.be/vavFf1Qiz20

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u