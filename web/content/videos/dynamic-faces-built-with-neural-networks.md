---
title: "Dynamic Faces Built With Neural Networks"
aliases: [/v/9aFPKkz07_g/]
date: 2017-04-12
featured_image: https://i.ytimg.com/vi/9aFPKkz07_g/mqdefault.jpg

---

{{% youtube id="9aFPKkz07_g" %}}

Using a Neural Network to rebuild your virtual face? Sure why not. There is no way this is a bad idea.

We are going to connect two systems together:
- Morph3D a 3D character morphing system that lets you create and edit models in Unity.
- Microsoft's Face and Emotion API which analysis images and provides details like age, facial emotions and face orientation.

We're going to take the output of Microsoft's Face and Emotion API's and connect them as the input into the Morph3D system. The idea is to take a picture and dynamically apply what we learn from that to our model, effectively matching our model (at least the face) to the image.

There are some problems there, Morph3D and Microsoft's Neural Network have different ideas about what certain things like "Happiness" ought to look like so even though both systems provide the same emotions they don't translate 1 for 1 into one another. Still, it's a really neat first step!

Think of some of the stuff you could do with this tech! You could use a webcam to automatically generate the face of your character in your next RPG, generate realistic (ish) facial expressions based off of real images of people reacting, or simply regenerate a photo using 3D Models and Unity. The possibilities are endless!

Learn more about the Morph3D Character Morphing System on their website or try the free version in one of your own projects! https://www.morph3d.com

You can do thousands of requests against Microsoft's Cognitive Services API for free. Sign up here: https://www.microsoft.com/cognitive-services/en-us/face-api

If you guys give this a try I'd love to see the results! There are a ton of ways you could go with this and they are all super cool.

I've used Morph 3D in some of my previous games. If you want to see it in action I recommend checking them out (the games are free on Game Jolt!)

Red, is a Game Jam game about identifying an anonymous killer in a house of anonymous people. The game was built for #asylumjam2016. http://gamejolt.com/dashboard/games/207577

Tranquility, is a Game all about choices and life. Designed as a 5 minute experience. Tranquility was built for #mvjam16 (Music Video Jam of 2016). http://gamejolt.com/dashboard/games/126359