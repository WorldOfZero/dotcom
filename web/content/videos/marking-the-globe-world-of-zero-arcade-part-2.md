---
title: "Marking the Globe - World of Zero Arcade- Part 2"
aliases: [/v/QHdTUyIOvVg/]
date: 2017-02-22
featured_image: https://i.ytimg.com/vi/QHdTUyIOvVg/mqdefault.jpg

---

{{% youtube id="QHdTUyIOvVg" %}}

We're going to continue work on our World of Zero Arcade project. More controller work specifically. In this video we'll be looking into adding markers to our globe so you can select where you are in the world. To do this we'll look into some basic raycasting to detect where we are pointing. We'll also take advantage of mecanim to animate the marker we are placing down. This will require us to write a super quick animation and wire it all up in unity's mecanim system.

To accomplish this we begin by copying some of the code from our previous video allowing us to retrieve the point of collision on the globe as well as the normal direction. We'll use this information to create a new prefab and place it on our globe.

Once that is done we create two animations for the map marker, an entrance and idle animation so we can animate the creation of the map marker. This will serve as a very high level introduction to unity's mecanim animation system and allow us to add some flare to dropping our map marker onto the map.

The stuff we're doing here is relatively basic, but we'll be getting into the really interesting stuff soon. Baby steps!

The World of Zero Arcade is open source. Checkout the code on GitHub: https://github.com/WorldOfZero/Arcade