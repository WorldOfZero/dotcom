---
title: "Starting the Highscores Service - Online Highscores - Part 1"
aliases: [/v/U_2u_SeK10k/]
date: 2020-01-03
featured_image: https://i.ytimg.com/vi/U_2u_SeK10k/mqdefault.jpg

---

{{% youtube id="U_2u_SeK10k" %}}

Lets take a look at what is required to create an online highscore board for your Unity game. Throughout this project we'll take a look at how to create a RESTful web-service, connect it to a database and then expose that web-service to your Unity game.

To start off we'll begin by creating a quick ASP.NET website that can return a set of the current highscores and the highscore for a specific player. For now, as we work out the contract of our API and identify the core functionality we can avoid taking on extra complications like databases and do all of our interactions with in memory dictionaries that store key/value mappings. Later, once we've moved further along with the project we'll be able to translate those key/value mappings into database tables and indexes that we can use to improve our searches performance.

This series is likely going to be built in multiple parts, in this first part we'll be exploring and identifying some of the unknowns of this project with the goal of delivering a basic MVP (minimum viable product). Once the MVP is complete we can revisit the project with more freedom to explore different languages for our server or different databases.

More information about getting started with the .NET Core CLI: https://docs.microsoft.com/en-us/dotnet/core/tools/

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u