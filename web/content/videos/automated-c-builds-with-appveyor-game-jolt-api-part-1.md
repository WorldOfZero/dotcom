---
title: "Automated C# Build's With AppVeyor - Game Jolt API - Part 1"
aliases: [/v/w2gb5yGsuIg/]
date: 2016-11-08
featured_image: https://i.ytimg.com/vi/w2gb5yGsuIg/mqdefault.jpg

---

{{% youtube id="w2gb5yGsuIg" %}}

Hello Internet! Today we're going to be working on a new project. Specifically we're going to be writing a new C# API for the Game Jolt API. This API lets developers add trophies, high scores and more to their games. We're going to be making a library that makes getting these features into your C# library as easy as possible.

To begin, we're going to setup our CI/CD pipeline. Specifically we're going to be adding automatic builds to our GitHub project using AppVeyor. This means that every time we commit to the new project on GitHub an automatic build will be triggered and run. Any errors will be posted onto the GitHub page and back to the contributors. Pretty handy and gets rid of the "it runs on my machine" worries.

This video itself is going to focus specifically on adding all those fun automated build configurations. We're not going to be writing much code. Instead we're going to look into how to setup AppVeyor with our new C# project. I probably should have read the directions before hand...

You can check out AppVeyor for yourself here: https://www.appveyor.com
It is free for Open Source projects or requires a minimal fee for other projects.

Information about the Game Jolt API we're going to be implementing can be found here: http://gamejolt.com/game-api/doc

The project itself is available on GitHub here: https://github.com/WorldOfZero/LINQForGameJolt