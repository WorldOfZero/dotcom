---
title: "Connecting an Azure Function to GitHub"
alias: ["/v/VK8zhoMKa7w"]
date: 2018-03-08
featured_image: https://i.ytimg.com/vi/VK8zhoMKa7w/mqdefault.jpg

---

{{% youtube id="VK8zhoMKa7w" %}}

Webhooks are really popular these days. Every service seems to have support for them these days. Lets try using these fancy new function as a service things to consume them. Specifically, let's take advantage of the included GitHub Webhook support in Azure Functions to build a service that can react to actions that happen on my public World of Zero GitHub.

This isn't really a look at implementing too much with Azure Functions themselves. They're literally just functions, if you know how to work with those then you already know all you need to to work with them. Instead we're going to focus on how to publish our function from Visual Studio, how to connect it to the GitHub webhook implementation and make sure everything is working as we intended.

Do you have other ideas we could leverage these kinds of serverless apps in? Let me know! Besides using them to consume webhooks you can hook them up to basic HTTP endpoints to build web services or attach them to a message queue to automatically consume messages as they arrive.

Like I mentioned there are a number of these Function as a Service offering. Amazon Lambda was the first cloud provider to offer the service, but both Microsoft and Google have introduced similar offerings. Besides that a number of OSS versions exist including Fission, RIFF (RIFF is For Functions) and OpenFAAS. Hybrids of this kind of design also exist in the form of Spring Cloud Functions as an example.

Currently the open source offerings are in some form of alpha or beta version (at least that I know of) so they're a bit more limiting when compared to what Amazon, Google and Microsoft offer in this space. Have you tried any of them out? Which did you prefer?

Discord: https://discord.gg/hU5Kq2u