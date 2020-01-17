---
title: I Learn How To Make Bash Flip Tables When I Break Things
date: 2019-08-23T01:27:21.000Z
tags:
  - world of zero
  - lets make
  - shell
  - console
  - terminal
  - bash
  - sh
  - bash shell
  - bash terminal
  - ps1
  - bash ps1
  - bash prompt
  - prompt
  - custom bash prompt
  - customize bash prompt
  - custom shell prompt
  - Unix Shell
  - linux shell
  - ubuntu
  - wsl
  - windows subsystem for linux
  - example
  - export ps1
  - bash_profile
  - vim
  - Bash PS1
  - /bin/bash
  - how to
  - walkthrough
  - tutorial
  - terminal prompt
  - command line
  - command prompt
  - linux command line
  - cli
  
featured_image: https://i.ytimg.com/vi/XUOti_9WgaM/mqdefault.jpg
---

{{< youtube id="XUOti_9WgaM" >}}

Lets take a look at how to customize a `bash` shell. We'll be making our shell print a table flip whenever the last  command failed. In order to customize your prompt you can overwrite the `PS1` environment variable.

To see what your current prompt is set to you can run `echo "$PS1"`

The table flip script looks like this:

```bash
table_flip() {
  if [[ "$?" == "0" ]]; then
    echo ""
  else
    echo "(╯°□°）╯︵ ┻━┻"
  fi
}
```

Here is a tool that can help you customize your prompt more easily: http://ezprompt.net/

The ArchLinux wiki goes into much more detail about prompt customization: https://wiki.archlinux.org/index.php/Bash/Prompt_customization#Bash_escape_sequences

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u