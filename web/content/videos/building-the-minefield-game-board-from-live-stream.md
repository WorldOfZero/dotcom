---
title: "Building The Minefield Game Board - From Live Stream"
alias: ["/v/CBFVvpzEcwY"]
date: 2020-05-12
featured_image: https://i.ytimg.com/vi/CBFVvpzEcwY/mqdefault.jpg

---

{{% youtube id="CBFVvpzEcwY" %}}

Recently I've been live streaming some larger projects on Twitch. We've been building out a new version of worldofzero.com using Hugo for example. Another project we start here is Minefield, an older project of mine that I released on Windows Phones originally. This is a take on Minesweeper with a twist, instead of trying to find all the mines on the map the goal is to safely traverse the minefield.

In this stream we mostly are taking a look at building out the Minefield game board itself. This is the data structure that stores where the mines are located and can tell us information about tiles relationships (how many adjacent mines they have). We'll also invest into putting this game board under test by adding a series of unit tests with Nunit that cover most of the functionality of the game board.

You can find me on Twitch at: https://www.twitch.tv/worldofzerodev

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u