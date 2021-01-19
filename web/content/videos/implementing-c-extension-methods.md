---
title: "Implementing C# Extension Methods"
aliases: [/v/nxyabkSlQW4/]
date: 2020-11-20
featured_image: https://i.ytimg.com/vi/nxyabkSlQW4/mqdefault.jpg
tags: [ csharp,dotnet,tutorial ]

---

{{% youtube id="nxyabkSlQW4" %}}

In C# Extension Methods provide a way to add additional functionality onto a type that you have created or imported into your project. You may use them to extend C#'s built in types like strings and integers or to extend new classes you have constructed. Lets take a look at how you can implement extension methods and start using them in your project!

Extension methods are implemented by creating a static class in your library or C# project. Static classes are different from normal classes in C# in the fact that they can not be instantiated. All of the methods attached to a static class must also be static. This means that extension methods must be static functions.

In addition to being located in static classes, extension methods are defined by a special `this` keyword before the first argument in the function. This keyword causes the first argument to be automatically provided by C#. The value of that argument will be the left hand side of the method being invoked. For example in our code `2.FizzBuzz()` we are extending the `2`. This means that the first argument (`this`) will be equal to `2`.

Other than those few special syntax requirements extension methods behave similar to other functions in C# and you may implement them in a similar way.

Our example extension method that implements Fizz Buzz looks like this:

```csharp
static class Extensions {
    public static string FizzBuzz(this int value) {
        if (value % 5 == 0 && value % 3 == 0) {
            return "FizzBuzz";
        } else if (value % 5 == 0) {
            return "Buzz";
        } else if (value % 3 == 0) {
            return "Fizz";
        } else {
            return value.ToString();
        }
    }
}
```

### Enabling Function Chaining

Because extension methods alter the structure of your code they may also be used to introduce function chaining to classes which previously may not have supported that capability. This allows queries in LINQ to be chained like:

```csharp
Users.Select(user.IsActive).Where(user.Name.StartsWith("A"));
```

Instead of what normal static methods might introduce:

```csharp
Where(Select(Users, user.IsActive), user.Name.StartsWith("A"));
```

This second version isn't quite as easy to read or implement as the first example.

***

You may learn more about using Extension Methods in the C# language documentation. https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/extension-methods

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u