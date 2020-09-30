---
title: "Using Your Terminal's Directory Stack to Work With Multiple Directories"
date: 2019-12-24
featured_image: https://i.ytimg.com/vi/NM_ynkPNURU/mqdefault.jpg

---

{{% youtube id="NM_ynkPNURU" %}}

Your terminal can maintain a list of directories you have visited by storing them in a stack. You can manipulate this stack using commands like `pushd` to push a new entry onto this stack or `popd` to pop an existing entry off of the current stack. We can also take advantage of this directory stack to create easily navigable sets of directories when we need to work with multiple directories simultaneously. An example that sets up a three directory workspace with three directories named `a`, `b` and `c` might look like this:

```sh
pushd c
pushd ../b
pushd ../a
pushd .
dirs -v
```

Running the commands above may result in a directory stack that looks like this:

```sh
0 ~/a
1 ~/a
2 ~/b
3 ~/c
```

To move to directory in the third index (`~/c`) we would use `cd ~3`. Using the `cd` command will modify the top element of the stack - this is why we push the current directory onto the stack after we have added each directory we want to visit.

To view the current stack of directories you may use: `dirs -v`. This will display a list of directories and their position within the stack.

To clear the directory stack you may use: `dirs -c`.


More on working with directory stacks in your shell: https://www.youtube.com/watch?v=UDD7EyGr8fU

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u