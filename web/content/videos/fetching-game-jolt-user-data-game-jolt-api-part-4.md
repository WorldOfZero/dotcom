---
title: "Fetching Game Jolt User Data - Game Jolt API - Part 4"
alias: ["/v/H81QVd_c2Z0"]
date: 2017-03-20
featured_image: https://i.ytimg.com/vi/H81QVd_c2Z0/mqdefault.jpg

---

{{% youtube id="H81QVd_c2Z0" %}}

Welcome back! In this video we're going to pick back up the work we started months ago on the Game Jolt API. The goal of this API is to provide a high level, tested and easy to use C# API for Game Jolt developers. It will allow players to integrate with a number of services at Game Jolt including User Data, Online High Scores and Trophies. In this video our focus is specifically on getting the Users information streaming back to our service.

To do this we can build off of the previous video where we built a not quite working Time service. Unfortunately that endpoint isn't working yet in the new Game Jolt API so we need to abandon it for now. Instead we're going back to basics with the V1.0 API to get our data. This means we'll implement another class very similar to our Time class, but this time it will work! Once we've proven that it works in a browser (oddly only in Edge, Vivaldi is having some weird issues) we can implement a quick service proxy for making actual async web calls using C#'s Async/Await features.

Async/Await is not currently available in the Unity version of .NET so some additional modifications may be required in order to get this up and running in Unity and some other game engines. Luckily, Unity is planning a migration to a modern .NET compiler which will add support for these features, depending on our time scale we may be able to wait for that to be implemented.

This video ends up mostly as a long ramble about various things with some debugging of the Game Jolt Game API. It all comes together in the end though.

Want to learn more about the Game Jolt API? Check out the official documentation: http://gamejolt.com/api/doc/game. Want to use this in your game right now? There are a number of really easy to use libraries in a ton of languages. Check them out as well: https://help.gamejolt.com/dev-game-api

Grab the code or contribute a new feature on GitHub: https://github.com/WorldOfZero/LINQForGameJolt


Apologies for the delay between this and the previous episode. I didn't plan for my vacation well and things got a bit messed up because of it.