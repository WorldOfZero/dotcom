---
title: 'Bash: Parameter Expansion'
date: 2026-11-18
draft: false
description: Quick Bash parameter expansions for trimming extensions, changing case, replacing text and setting default values, without reaching for sed or awk.
tags:
- shell
- bash
- tip
---

Bash can transform variables for you as it expands them, with no extra programs like `sed` or `awk`. These are called *Shell Parameter Expansions*, and they are written as `${variable...}`. Here are four of the most useful:

```bash
file="notes.txt"
echo "${file%.txt}"          # notes
echo "${file^^}"             # NOTES.TXT
echo "${file/notes/todo}"    # todo.txt
echo "${missing:-fallback}"  # fallback
```

If you want the length of a value, see the [quick tip on counting characters in a string](/videos/counting-characters-in-a-bash-string-quick-tip/). The cheat sheet below breaks down each expansion.
