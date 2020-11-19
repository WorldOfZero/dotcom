---
title: "Live Code Reloading with `dotnet watch` - Quick Tip"
aliases: [/v/nYudqdL55us/]
date: 2019-02-01
featured_image: https://i.ytimg.com/vi/nYudqdL55us/mqdefault.jpg

---

{{% youtube id="nYudqdL55us" %}}

One of the greatest tools for development is a really quick turn around between the code you write and seeing the result of that code. When you're working with .NET Core their is a really handy tool that ships with the framework that can enable you to get this kind of feedback significantly faster.

`dotnet watch` is a command that allows you to create a file watcher that will watch the files in your project for new changes and, upon detecting them, rerun the command you specified. For example:

* `dotnet watch run` will rerun your code every time you make a change to your code.
* `dotnet watch build` will rebuild your code with every change
* `dotnet watch test` will run the tests for a test project every time you make a change to a test.

These can be a really handy way to keep your project running during development and constantly testing and trying new features, patterns etc.

While not shown here you may run this with projects like ASP.NET  (commands which may not have exited before a new change is detected). In the case of ASP.NET your web server will be restarted so your next request will reflect the latest changes you've made!

Microsoft has a more in depth discussion of the watch command that discusses some of the other features of it and provides additional examples here: https://docs.microsoft.com/en-us/aspnet/core/tutorials/dotnet-watch

This is a new style I'm trying and I'd love your feedback! Let me know what you think in the comments or in our Discord!

Join the World of Zero Discord: https://discord.gg/hU5Kq2u