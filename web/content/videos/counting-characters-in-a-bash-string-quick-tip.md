---
title: "Counting Characters in a Bash String - Quick Tip"
alias: ["/v/mK7hutk2yCE"]
date: 2020-01-27
featured_image: https://i.ytimg.com/vi/mK7hutk2yCE/mqdefault.jpg

---

{{% youtube id="mK7hutk2yCE" %}}

Bash has a series of Shell Parameter Expansion features that allow you to do a number of different things when working with your shell. One of those features makes it possible to get the number of characters in a string easily.

For example this stores "Hello World" into `myvariable` and then writes `11` to the screen (the number of characters in the string).

```bash
myvariable="Hello World"
echo "${#myvariable}"
```

You can read more about Bash's features and Shell Parameter Expansion specifically in the Bash docs: https://www.gnu.org/savannah-checkouts/gnu/bash/manual/bash.html#Shell-Parameter-Expansion

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u