---
title: "Dependency Injection in Spring"
alias: ["/v/EsbMbg34CpQ"]
date: 2018-04-11
featured_image: https://i.ytimg.com/vi/EsbMbg34CpQ/mqdefault.jpg

---

{{% youtube id="EsbMbg34CpQ" %}}

Lets take a look at dependency injection, what it is and how to use it in Java Spring.

Dependency Injection is an inversion of control pattern that removes objects creating or finding the objects they need to simply requesting them. This means that we can create a system that requires a database or a paint-brush (or anything else you want) and have the framework decide which object to provide your classes.

There are two parts to building dependency injection in Spring.

1. A bean (or component) you can inject
2. An object which requires the bean

Once you have both of these things you can very easily pull the first, into the second. That is what Spring is here to help you do.

In Spring you solve defining an injectable Bean by using one of a few different interfaces. In this example we'll use `@Component`. You can define a required bean by adding `@Autowired` to a field which signifies to Spring that the component is required for that field.

I've created a video that introduces the Spring Framework and walks through setting up the basic Application and Controller we reuse in this video: https://youtu.be/K8OXyLKjKJg

If you're looking for more examples of how to use Spring's Dependency Injection features this link has both written and video examples: https://springframework.guru/dependency-injection-example-using-spring/

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u