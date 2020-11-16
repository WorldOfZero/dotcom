---
title: "Using Command Prompt to Create a Symbolic Link on Windows"
aliases: [/v/w2gxWTOPw7U/]
date: 2020-06-17
featured_image: https://i.ytimg.com/vi/w2gxWTOPw7U/mqdefault.jpg

---

{{% youtube id="w2gxWTOPw7U" %}}

Symbolic Links allow you to create a reference in your file system to another file or directory. This allows you to reference the same file in multiple places without having to physically copy it into each place. This can save storage space and also allows a single change to the file to be seen by every location that links to it as well.

In this video we'll be taking a look at how to create these Symbolic Links from the Command Prompt using the `mklink` command. In order to use this command you'll need to be running Command Prompt as an administrator. `mklink` can be used to create symlinks between files and directories however the syntax is slightly different depending on which you'll be using.

When creating a symlink between files you may use:

```cmd
mklink [path] [target]
```
However if you're creating a symlink between directories you'll need to include the `/D` flag.

```cmd
mklink /D [path] [target]
```

In both of these examples a new file or directory will be created at the `path` that links to the object located at the `target`.

The `mklink` command also allows you to create hard links and directory junctions as well. You may learn more about using it by running `mklink -?` in your prompt.

If you see the "You do not have sufficient privilege to perform this operation" error make sure you are in an Administrator Command Prompt.

If you prefer Powershell you can learn how to make a symbolic link in Powershell here: https://youtu.be/_VnONfOgP8M

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u