---
title: "Collaborative Coding with Visual Studio Live Share"
date: 2018-06-18
featured_image: https://i.ytimg.com/vi/7luOiKKZa-w/mqdefault.jpg

---

{{% youtube id="7luOiKKZa-w" %}}

Visual Studio's new Live Share feature makes it possible to collaboratively edit code, debug together and share terminals and locally hosted websites with your other teammates. This makes paired programming, debugging together and more a lot easier (especially compared to screen sharing).

VS Live Share is a fairly easy tool to use and is currently in beta for both Visual Studio 2017 and Visual Studio Code. In this video we'll be working with Visual Studio Code. Starting with a completely empty project we'll create a `dotnet new console` application and work from there.

We'll talk briefly about how Visual Studio Live Share connects you and your co-editors. There are two connection modes *Direct* and *Relay*. The default setting is to automatically select the best of the two for your connection. *Direct* connections directly connect a client to the host without leaving the network or using an in-between server. *Relay* connections take advantage of Azure Service Bus to synchronize communication through an external source hosted by Microsoft. Both of these connection modes are end-to-end encrypted to prevent others from snooping on what you're working on.

Once we have Visual Studio Live Share setup we'll create a local collaborative session to begin editing our console application. We'll explore editing from two connected editors, share a terminal so we can run commands or test our program remotely and talk briefly about sharing  server ports (not demonstrated beyond a description unfortunately).

After we've covered the basic features we'll also look into how we can connect a debugger to our .NET app (or any other application that supports VS Code's debugging interface) and share the debugging experience across the session. This is *HUGE* and means that your collaborators can inspect and debug alongside you in real time.

By the end of this you should have a basic grasp of how to get started with Visual Studio Live Share as well as the breadth of features it offers to make your coding and collaborating experience better. It's pretty cool, you should try it out!

Run into an issue or want to help other people learn about Visual Studio Live Share? You can contribute to their GitHub page to help track bugs, features and more: https://github.com/MicrosoftDocs/live-share

You can get the Visual Studio Code's Live Share extension here: https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare

Join the World of Zero Discord channel: https://discord.gg/hU5Kq2u