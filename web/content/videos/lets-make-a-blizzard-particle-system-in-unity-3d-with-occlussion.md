---
title: "Let's Make a Blizzard Particle System in Unity 3D with Occlussion"
alias: [/v/ZnVsPvKjgAs/]
date: 2016-12-16
featured_image: https://i.ytimg.com/vi/ZnVsPvKjgAs/mqdefault.jpg

---

{{% youtube id="ZnVsPvKjgAs" %}}

It's winter and that means snow. Supposedly we're going to be seeing a bit of snow here so let's make a snow particle system. This is going to be a bit more than just an exploration of Unity 5.5's new particle system changes though. We're also going to explore how to simulate particle occlusion. This means that when we are inside of a cave, house etc that our particles won't emit, but when you walk outside things will emit like they should. This is a really fun and interesting way to work with particle's because we still get the classic "things falling" effect like you'd get with rain (or snow), but now we are getting it in a way that supports smooth transitions from inside land to outside. The best part? It's not that hard to do either!

To accomplish what we want we need a few things. First a quick snow particle emitter. That's not too hard to build really. After we have our particle system we will position them about our player in some sort of pattern. We'll have multiple emitters so that each can be enabled and disabled independently. To detect if our particle system is occluded or not we'll use the power of the mysterious sky rays! Actually just simple raycasts from the sky down towards our particle systems.

If nothing is in the way then our particles emit like normal.

If something is in the way then we stop our particle system from emitting particles.

That's really all we need to do. Simple!

The source code for the component we will create to handle all of this is open source and you can download it here: https://gist.github.com/runewake2/ad154ed075afef194d202b58321c84f6

The terrain in this video is created using Voxeland's Voxel Based Terrain. You can find it on the Unity Asset Store here: https://www.assetstore.unity3d.com/en/#!/content/9180