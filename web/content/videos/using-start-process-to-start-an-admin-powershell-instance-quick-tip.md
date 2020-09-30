---
title: "Using Start-Process to Start an Admin Powershell Instance - Quick Tip"
date: 2020-03-02
featured_image: https://i.ytimg.com/vi/ViIS6wFkWxc/mqdefault.jpg

---

{{% youtube id="ViIS6wFkWxc" %}}

You may start an Administrative Powershell from a separate shell by using the `-Verb RunAs` parameter like this:

```powershell
Start-Process Powershell -Verb RunAs
```

This will create an elevated Powershell instance, however the new instance of powershell will be targeting a new path: `C:\WINDOWS\System32\`. If you'd like to open Powershell at a custom directory or the current shells directory you may pass in a Working Directory. For example: `Start-Process Powershell -Verb RunAs -WorkingDirectory .` creates a new shell in the current directory with elevated permissions.

This works with other programs as well. If you want an admin Command Prompt for example you could run this:

```powershell
Start-Process cmd -verb runas
```

## References

`Start-Process` documentation: https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.management/start-process

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u