---
title: 'Starting an Administrative PowerShell'
description: 'Start a new Admin PowerShell from an existing PowerShell client.'
date: 2020-01-04
tags:
- powershell
featured_image: "images/posts/powershell/default.jpg"
---

You may start an Administrative PowerShell from a separate shell by using the `-Verb RunAs` parameter like this:

```powershell
Start-Process Powershell -Verb RunAs
```

## Using the UI

If you have access to a UI you may access the Power User Menu on Windows using `Windows + X`. From here click `Windows PowerShell (Admin)`. Make sure "Replace Command Prompt with Windows PowerShell in the menu when I right-click the start button or press Windows key+X" is enabled in your Windows settings.

![Enable Replace Command Prompt with Windows PowerShell in the menu when I right-click the start button or press Windows key+X](/images/posts/powershell/powershell-windowsx.jpg)

## References

* [`Start-Process` documentation](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.management/start-process)

## Other Programs

This works with other programs as well. If you want an admin Command Prompt for example you might run this:

```powershell
Start-Process cmd -verb runas
```