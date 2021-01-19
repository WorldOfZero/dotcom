---
title: "Creating and Using SSH RSA Tokens on Windows 10"
aliases: [/v/gM2J2DWCTnM/]
date: 2018-11-20
featured_image: https://i.ytimg.com/vi/gM2J2DWCTnM/mqdefault.jpg
tags: [ windows,tutorial ]

---

{{% youtube id="gM2J2DWCTnM" %}}

I'd like to be able to connect to my servers without having to continuously enter my users password. We're going to accomplish that by making use of an SSH Security Token. Specifically we'll be generating an RSA public and private key that we can use to authenticate with a remote server more easily.

This works by first generating these two keys. A private key that should remain hidden and a public key that should be shared with the servers which need to identify you.

Once the keys are generated we'll need to configure our server so it understands who we are. This is done by sharing the public key with the server (we'll SCP it over) and adding it to the `authorized_keys` file on it. This allows you to send an encrypted message to the server when authenticating that can be recognized by comparing it with the public key it knows.

Because of this it is *EXTREMELY* important that you don't share your private key (don't SCP it to another computer, store it in git etc). If you do, you should immediately generate a new key and remove the old one from the `authorized_keys` list. Anyone with your private key will have the same access you do!

Prior to Windows 10 version 1709 you would have needed PuTTY or another SSH client to accomplish what we do in this video. However, OpenSSH is now included with Windows 10. Some additional information about OpenSSH being added to Windows 10: https://blogs.msdn.microsoft.com/powershell/2017/12/15/using-the-openssh-beta-in-windows-10-fall-creators-update-and-windows-server-1709/

For some more information about SSHing with an RSA token including how to set things up or a bit more detail on the steps we cover here check out this article by Indiana University. https://kb.iu.edu/d/aews

SSH Random Art Images are intended to make it easier for humans to validate what a key is compared to diffing long strings of text. You can find out more about this here: https://superuser.com/questions/22535/what-is-randomart-produced-by-ssh-keygen

Join the World of Zero Discord: https://discord.gg/hU5Kq2u