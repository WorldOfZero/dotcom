---
title: "Can You Hear Me Now - Trying and Failing to Use Unity's Microphone"
aliases: [/v/fOPJLeDI9ms/]
date: 2018-08-03
featured_image: https://i.ytimg.com/vi/fOPJLeDI9ms/mqdefault.jpg

---

{{% youtube id="fOPJLeDI9ms" %}}

I've never used Unity's Microphone API's before. Let's explore them together and get lost while we make something cool! Our goal is to create a frequency graph that can show the amplitude of different frequencies within our microphone (we won't be successful in building it).

There are two main parts to this project:

The first is a class that can accept Microphone input from a selected device and store that information into some sort of storage we can access from the rest of our code.

The second part is a visualizer that can take the stored microphone data and do something interesting with it. For this we'll just adjust the scaling of cubes based on amplitude.

Unity's Microphone class documentation: https://docs.unity3d.com/ScriptReference/Microphone.html

The support ticket I was leaning on during this for help can be found here: https://support.unity3d.com/hc/en-us/articles/206485253-How-do-I-get-Unity-to-playback-a-Microphone-input-in-real-time-

Join the World of Zero Discord channel: https://discord.gg/hU5Kq2u