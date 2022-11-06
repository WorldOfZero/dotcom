---
title: Exploring Git Hooks with the Reactor Code Lab
draft: true
libraries:
- mermaid
tags:
- git
- ci/cd
- codehealth

---

{{< youtube id="9agBsG1tX5o" >}}

This week in the Reactor Code Lab lets explore Git Hooks, a tool you can use to hook into git actions and respond with your own processes. The Reactor Code Lab is a weekly stream I am running on the [Microsoft Developer Twitch](https://www.twitch.tv/microsoftdeveloper) and [Microsoft Reactor YouTube](https://www.youtube.com/c/MicrosoftReactor1) channels where we explore fun new topics in software development, test out different tools or otherwise learn something new! Over the course of this hour long stream we were exploring into a feature of git that allows you to hook into it's behavior and trigger additional scripts that fit your project or workflow better. For our example we'll be take a look at a few different use cases including running a linter or code formatter before committing code as well as running a subset of tests to ensure your code will be ready for code review.

## Setup VS Code

Git hooks are already ready to use in your existing git repos inside your projects `.git` directory. If you're using Visual Studio Code this directory is hidden by default and you'll need to either open it explicitly or update your Visual Studio Code configuration to no longer exclude `.git`. directories from your files explorer. To do this update your editors `preferences.json` file with

```json
"files.exclude": {
  "**/.git": false
}
```

When you save this change you should see a `.git` directory in your file explorer now.

## Creating a Hello World Git Hook

## Git Pre-Commit Tests and Code Format Checks

Expanding on

```sh
#!C:/Program\ Files/Git/usr/bin/sh.exe
# Run .NET format and check for any formatting changes.
# If formatting changes are detected give a warning and prevent commit.
dotnet format --verify-no-changes
# Run the projects tests, except tests marked as "Slow"
dotnet test --filter "Category!=Slow"
```

```sh
git commit -m "..." --no-verify
```

## Learn More

- [Learn Git Hooks]()
- [Enterprise DevOps Learning Path]()
- [Microsoft Reactor YouTube](https://www.youtube.com/c/MicrosoftReactor1)
- [Microsoft Developer Twitch](https://www.twitch.tv/microsoftdeveloper)