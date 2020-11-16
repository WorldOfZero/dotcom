---
title: "Growing Trie's - Lets Make a Simple Prefix Tree in C#"
aliases: [/v/4nmVXKu6e_Q/]
date: 2017-09-25
featured_image: https://i.ytimg.com/vi/4nmVXKu6e_Q/mqdefault.jpg

---

{{% youtube id="4nmVXKu6e_Q" %}}

Lets explore how we might build a trie data structure. A trie is a tree that is used to represent strings (or really any enumerable type) in a way that allows it to be easily searched in a way where it can provide potential answers given a prefix.

This works by building a tree character by character so that we can traverse down it to build words. Once this structure is built we can traverse down it to find a word or only partially traverse it and use all the children remaining to list out all the potential answers for our given partial input. This makes it an ideal option for building things like auto completion lists or a code editors intellisense feature.

While the trie we'll be building here will be significantly simpler than those the basic features will become apparent here. Our trie will be designed to support both Adds and Searches on strings. We'll explore a semi test driven approach to build this by using XUnit and some pre-written tests to test our code as we go. The end goal is a trie where we can not only add and build our tree, but also traverse it and get a list of potential options from our search.

We can obviously build on this a lot and take it in a number of different ways. What would you like to see us build next?

Wikipedia's article on trie's is a great starting point to learn more about these data structures and has a number of alternative implementations you can try: https://en.wikipedia.org/wiki/Trie

Want to play with this code yourself? Grab the code from GitHub: https://gist.github.com/runewake2/20bab89691ed241e0758ca48b810de65

Discord: https://discord.gg/hU5Kq2u