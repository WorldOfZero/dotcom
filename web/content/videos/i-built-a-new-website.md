---
title: "I Built A New Website"
aliases: [/v/BnhiqddQpVo/]
date: 2019-04-23
featured_image: https://i.ytimg.com/vi/BnhiqddQpVo/mqdefault.jpg
tags: [ demo,typescript,web,dotnet,asp.net,opensource,test,codehealth,containers ]

---

{{% youtube id="BnhiqddQpVo" %}}

I've been trying to replace the old World of Zero website for a while now. A beta of the new version is finally in a working state and I'd love for you all to check it out!

The previous worldofzero.com is run off of Tumblr and the experience... isn't great. The content for that site is uploaded automatically via a robot that detects new YouTube uploads. The problem with this pipeline is things like formatting are completely removed. Additionally links are replaced with bit.ly versions. Overall it's not a great user experience, especially with how slow the entire site is in general.

The new site is built from scratch in React using [Next.JS](https://nextjs.org/). This gives us a bit more freedom to build something fast and responsive with a more suited UI. The backend is a custom ASP.NET server which makes calls to the YouTube API services to retrieve videos.

There's a few fun new features I've added here as well that I'm excited to expand on in the future.

1. The descriptions support Markdown! This means that we get very pretty descriptions  and...
2. Syntax Highlighting! As part of the Markdown support we also are able to add syntax highlighting so languages are displayed in what I hope is a very readable way.

Three examples of this are csharp, java and shader highlighting:

```csharp
var test = "Hello, beta.worldofzero.com!";
```

```java
String test = "Hello, beta.worldofzero.com!";
```

```shader
float3 = float3(42.0, 9001.0, 3.14159);
```

All languages are distinguished by a unique color and a link to Learn More which I've tried to link to an online sandbox for that language (try.dot.net in the case of C# and shadertoy.com in the case of shaders). This feature is pretty experimental at this point so I'd love to hear your feedback on it!

There are a lot of ways we could improve this more and I'd love to get your feedback on what works, what could use more work and cool new features you think would make it even better!

You can checkout the new World of Zero website at http://worldofzero.com

If you want to checkout the code for this new website you can head to: https://github.com/WorldOfZero/dotcom.

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u