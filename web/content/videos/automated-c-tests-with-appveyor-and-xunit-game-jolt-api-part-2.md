---
title: "Automated C# Tests with AppVeyor and XUnit - Game Jolt API - Part 2"
aliases: [/v/3zwmmpSTXx4/]
date: 2016-11-08
featured_image: https://i.ytimg.com/vi/3zwmmpSTXx4/mqdefault.jpg

---

{{% youtube id="3zwmmpSTXx4" %}}

Now that we have automated builds working on AppVeyor lets take our CI pipeline a step further and add some tests that will validate our build. This will make it possible for us to know if basic functionality is still working in the project before anyone sees it.

To do this we're going to be implementing xUnit into AppVeyor's build chain. This will allow us to write and run tests in Visual Studio and then, when our code is ready to be checked in, we can run those exact same tests on the build server. This will make it very easy to avoid checking in code that wasn't properly tested and also avoid regression of any issues that pop up later. It's also easy to do which is a pretty awesome plus as well.

Learn more about xUnit on their website: https://xunit.github.io

This video takes advantage of AppVeyor, a CI/CD tool for .NET. It is free for Open Source projects and charges a minimal fee for private projects. You can learn more about it here: appveyor.com

Grab the project from GitHub at https://github.com/WorldOfZero/LINQForGameJolt

Curious about what the Game Jolt API offers? Read more about it here: http://gamejolt.com/game-api/doc