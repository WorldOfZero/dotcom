---
title: "Using PowerShell to Create a Symbolic Link on Windows"
date: 2020-06-16
featured_image: https://i.ytimg.com/vi/_VnONfOgP8M/mqdefault.jpg

---

{{% youtube id="_VnONfOgP8M" %}}

Symbolic Links allow you to create a reference in your file system to another file or directory. This allows you to reference the same file in multiple places without having to physically copy it into each place. This can save storage space and also allows a single change to the file to be seen by every location that links to it as well.

In this video we'll be taking a look at how to create these Symbolic Links from PowerShell using a version of the `New-Item` commandlet. In order to take advantage of this you'll need to be running in an Administrator PowerShell or you may see the "New-Item : Administrator privilege required for this operation" error. This solution is able to create symbolic links between files or directories and also will detect if the target item you are creating the link to exists or not before generating the link.

In order to create the symlink in PowerShell you'll run this command:

```ps1
New-Item -ItemType SymbolicLink -Path [path] -Target [target]
```

This will create a new Item at the provided path that represents a link to the target file or directory. 

If you prefer Command Prompt you can learn how to make a symbolic link in Command Prompt here: https://youtu.be/w2gxWTOPw7U

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u