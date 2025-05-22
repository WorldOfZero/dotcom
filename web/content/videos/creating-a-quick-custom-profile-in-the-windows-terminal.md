---
title: "Creating a Quick Custom Profile in the Windows Terminal"
aliases: [/v/DGNG9FYkkFE/]
date: 2021-10-06
watch_time: 19 minutes
featured_image: https://i.ytimg.com/vi/DGNG9FYkkFE/mqdefault.jpg
tags: [ tip,windows,powershell,shell ]

---

{{% youtube id="DGNG9FYkkFE" %}}

The Windows Terminal allows you to run any number of different profiles. Some of the defaults that you might see pre-configured include things like PowerShell and Command Prompt, but you can introduce your own profiles to the Windows Terminal to fit your needs! This means you can add your favorite cloud shell or add a custom shell like NuShell directly to the Windows Terminal so they can be launched immediately with a hotkey or via the GUI. In this video we'll look at how you can quickly add a new profile to the Windows Terminal

There are multiple ways the new profile can be introduced. In this video we'll be duplicating an existing profile and configuring it to automatically SSH into one of my development servers. This can be done by opening the Windows Terminal settings and clicking "Add a New Profile" from the options on the left hand side of the settings screen. That button will present you with the option to either duplicate an existing profile or add a new empty profile. Duplicating a profile will automatically copy style, icon and other settings.

If you prefer to work directly with configuration files you can manually edit your Windows Terminal profiles in the `settings.json` file. This can be accessed by clicking "Open JSON file" from the settings menu.

Your profiles are configured in a list under the "profiles" setting. Add your new profile to that list and save the file to begin using it!

```json
"profiles":
{
    ...
    "list":
    {
        {},
        {},
        // Insert your profile here!
    }
}
```

***

You can download the Windows Terminal for your machine here: https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u