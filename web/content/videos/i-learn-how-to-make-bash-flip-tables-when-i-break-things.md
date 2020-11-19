---
title: "I Learn How To Make Bash Flip Tables When I Break Things"
aliases: [/v/XUOti_9WgaM/]
date: 2019-08-22
featured_image: https://i.ytimg.com/vi/XUOti_9WgaM/mqdefault.jpg

---

{{% youtube id="XUOti_9WgaM" %}}

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