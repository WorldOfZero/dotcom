---
title: "Serial Ports as a Service in ASP.NET - Data Cube - Part 3"
aliases: [/v/2iaZOqE5YZg/]
date: 2017-04-04
featured_image: https://i.ytimg.com/vi/2iaZOqE5YZg/mqdefault.jpg

---

{{% youtube id="2iaZOqE5YZg" %}}

A few detours and a lot of troubleshooting later we finally have opened up our Arduino as a service using ASP.NET. It took way more work than expected to get here and we had to step back almost as much as we moved forward. Still, it's working now. That's nice.

Specifically we're going to look into introducing ASP.NET with .NET Core. We'll look at some of the basics of getting started including controllers, view models and more fun stuff like encoding.

Postman's installation issues should have been a warning. Maybe they were, but regardless I ignored them. Foolish, foolish me.

A lot goes wrong here. The entire System.IO.Ports namespace is not included as part of .Net Core. The feature is planned and there is more information about that in a link below, but right now you're SOL if you want to do serial communication.

So, we solve that by trying a ton of different things.
First, we try using Nuget to get a compatible package. Nope, doesn't work.
Second, we try a fork of the SerialPort class for .NET Core. Also doesn't work.
Third, we use a beta version of .NET Core which includes a port of the Serial Port class. A number of other issues come up because of this. Mostly packages not existing.
Finally, we revert back to a .NET 4.6 app. This means we lose our cross platform capabilities, BUT it works! Yay.

Once we finally get our Serial Communication up and running it's a quick bout with the service's API to get things implemented and then we're off to the races with a full Serial Ports as a Service. 

We also get to play around with some fun new C# string formatting features, because when you're using new stuff might as well use ALL the new stuff.

Here is the Issue on GitHub for adding SerialPort to .Net Core: https://github.com/dotnet/corefx/issues/984