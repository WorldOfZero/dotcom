---
title: "Making Sumo Splash - Let's Make an Arcade Game"
aliases: [/v/fOM--ytUjV4/]
date: 2016-11-13
featured_image: https://i.ytimg.com/vi/fOM--ytUjV4/mqdefault.jpg

---

{{% youtube id="fOM--ytUjV4" %}}

Our next project is going to be something really fun. We're going to be taking advantage of the new Beam FTL streaming protocol which gets around 0.2 second delay. Using that we are going to build a multiplayer arcade style hotseat game that isn't played locally. Instead the game is streamed live from another computer and players only connect via a remote control app.

There is a lot of stuff we need to get done to get this working and the streaming bits are going to come after this live stream is over, but what we are going to work on now is getting our game in place (or at least proving out the concept). The multiplayer, remote control and more will come after the fact in subsequent videos.

The game we are going to be making is what I'm calling Sumo Splash. Sumo Splash is a multiplayer based game where players sit on a platform filled with water. The goal is to knock the other player out of the pool and avoid falling out yourself. Players attack by executing timed "splash" attacks by leaping out of the water and creating a wave. These splashes are more effective at closer distances and only effect players in the pool. You can avoid splashes by jumping out of the water to avoid them yourself (and do your own counter splash attack). The game emphasizes positioning, timing and strategy.

Hopefully it also plays well even with the significant amount of input lag there will be over the Beam stream. We won't know that until the whole project is finished.

All of the code for this is going to be open source so you can add your own games and set up your own streams! You can download the code from the GitHub page here: https://github.com/WorldOfZero/Arcade