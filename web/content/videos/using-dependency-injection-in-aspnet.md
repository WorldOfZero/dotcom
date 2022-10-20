---
title: "Using Dependency Injection in ASP.NET"
aliases: [/v/T2hD6Imb6y8/]
date: 2022-10-20
featured_image: https://i.ytimg.com/vi/T2hD6Imb6y8/mqdefault.jpg
tags: [ dotnet,csharp,asp.net,tutorial ]

---

{{% youtube id="T2hD6Imb6y8" %}}

Dependency Injection is a tool we can use to automatically provide objects with services they need without having to explicitly declare what is needed inside of the objects themselves. This allows us to more easily reconfigure objects to fit our needs and allows us to adopt our code more easily to the environments we're running it in. Dependency Injection is a form of the inversion of control (IoC) software design pattern.

In our example we're injecting an `ICalculator` into our application and implementing that with `Calculator`:

```csharp
public interface ICalculator {
    int Value { get; }
    void Operation(int number);
}

public class Calculator : ICalculator {
    public int Value { get; private set; }
    public void Operation(int number) {
        Value += number;
    }
}
```

There are three scopes you can use when adding services to inject into your code:

* **[Transient](https://learn.microsoft.com/en-us/dotnet/api/microsoft.extensions.dependencyinjection.servicecollectionserviceextensions.addtransient)**: A new copy of your service will be constructed every time it is requested by an object.
* **[Scoped](https://learn.microsoft.com/en-us/dotnet/api/microsoft.extensions.dependencyinjection.servicecollectionserviceextensions.addscoped)**: Your service will be instantiated once for the entire execution scope - usually covering a single web request. Every reference to the service within that scope will share the same copy of the service.
* **[Singleton](https://learn.microsoft.com/en-us/dotnet/api/microsoft.extensions.dependencyinjection.servicecollectionserviceextensions.addsingleton)**: Your service will be instantiated once - the first time it is requested - and then that instance will be reused everywhere else it is needed for the entire time your application is running.

You can learn more about using .NET's Dependency Injection features at these links:

* http://aka.ms/usingdotnetdependencyinjection
* https://learn.microsoft.com/en-us/aspnet/core/fundamentals/dependency-injection

If you're interested in using Dependency Injection in Spring Boot and Java you can learn more about that here: https://youtu.be/EsbMbg34CpQ
If you're interested in learning more about how to use Dependency Injection in your Unity games you can learn more about that here: https://youtu.be/e0KWsizPYAw

***

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u