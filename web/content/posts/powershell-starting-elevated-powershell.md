---
title: 'Starting an Administrative Powershell'
description: 'Start a new Admin Powershell from Powershell'
date: 2020-01-04
tags:
- powershell
series:
- quicktips
featured_image: "posts/powershell/default.jpg"
---

```powershell
Start-Process Powershell -Verb RunAs
```

#### Using the UI

If you have access to a UI you may access the Power User Menu on Windows using `Windows + X`. From here click `Windows PowerShell (Admin)`. Make sure "Replace Command Prompt with Windows Powershell in the menu when I right-click the start button or press Windows key+X" is enabled in your Windows settings.

![Enable Replace Command Prompt with Windows Powershell in the menu when I right-click the start button or press Windows key+X](/images/posts/powershell/powershell-windowsx.jpg)

#### References:

* [`Start-Process` documentation](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.management/start-process) 