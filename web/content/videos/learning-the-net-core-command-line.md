---
title: "Learning The .NET Core Command Line"
date: 2019-06-24
featured_image: https://i.ytimg.com/vi/YkguKCDY6h8/mqdefault.jpg

---

{{% youtube id="YkguKCDY6h8" %}}

How do you start a new .NET Core project from the command line? How do you learn how to use the commands and figure out what is available for you? In this video we're going to take a look at some of the basics of working with .NET Core on the command line. We'll be using Powershell in this video, but these same things should apply in a Command Prompt window or Linux Terminal.

The goal of this video is to create a brand new .NET Core project without using any tools other than the .NET Core CLI (the `dotnet` command). We'll explore how to get help with this command and others in Powershell/Bash/CMD so we can learn the expected parameters and the potential values we can provide to the commands we'll be using. For the majority of this video we'll be working with `dotnet new` and `dotnet run`. These commands will create a new dotnet project or build and run a dotnet project respectively. Both can take a number of parameters to specify a bit more closely what you want to do.

### Some useful commands:

* `dotnet --help`: Learn the available commands for your version of .Net. Another command to accomplish the same thing when using powershell is `dotnet -?`.
* `dotnet new --help`: Learn how to create a new .Net project
* `dotnet new console`: Create a new .Net console project
* `dotnet run`: Run the dotnet project in the current directory

More information on .NET Core is available here: https://docs.microsoft.com/en-us/dotnet/core

Scott Hanselman has a fantastic post about the new Terminal for Windows. Check it out to learn more: https://www.hanselman.com/blog/ANewConsoleForWindowsItsTheOpenSourceWindowsTerminal.aspx

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u