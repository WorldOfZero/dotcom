---
title: "A Cross Platform .NET UI Framework - Hello World in Avalonia UI"
aliases: [/v/rho26Ik30D4/]
date: 2018-03-08
featured_image: https://i.ytimg.com/vi/rho26Ik30D4/mqdefault.jpg

---

{{% youtube id="rho26Ik30D4" %}}

Ever wanted to bring your WPF or UWP application across platforms. What if you could ship your same app built on familiar WPF designs to MacOS, Linux and even Android and iOS? Avalonia UI is a framework built on top of the new cross platform capabilities of .NET with large amounts of inspiration taken from WPF.

The framework is currently in beta and not necessarily something you'd want to ship in a major project yet. But for creating developer tools or just experimenting it's a ton of fun! 

We're going to explore the basic's of Avalonia by creating a simple project that can great people by name. We'll add a TextBlock, TextBox and Button. The TextBlock will display a greeting using the name entered into the TextBox when you click the button. This will give us a way to explore the basics of writing a UI in XAML, take advantage of the Data Binding capabilities offered and play with the ability to tie your XAML and code behind together with events.

You can find Avalonia on GitHub or on their website.
 - https://github.com/AvaloniaUI/Avalonia
 - http://avaloniaui.net

Some troubleshooting:
`dotnet install -i Avalonia.Templates.NetCore` is the recommended command for installing the Avalonia templates. `install` is not a command on dotnet. You can use `dotnet new -i Avalonia.Templates.NetCore` instead.

Discord: https://discord.gg/hU5Kq2u