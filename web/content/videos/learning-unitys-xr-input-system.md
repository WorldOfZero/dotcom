---
title: "Learning Unity's XR Input System"
date: 2019-07-12
featured_image: https://i.ytimg.com/vi/_H0sYjDx4U0/mqdefault.jpg

---

{{% youtube id="_H0sYjDx4U0" %}}

There are two ways to handle input in your VR games built with Unity. Right now we have used Unity's `Input` system to allow us to create Axis and Buttons which can be retrieved using the normal `Input.GetAxis` methods. This is... clunky... in VR. Different Headsets have different capabilities and various controllers will support different types of input. Continuing to rely on the `Input` class will mean that we'll have to implement some sort of system to check the capabilities of the device that we're using and see what features we can use to power our locomotion and other inputs. Luckily Unity has already implemented this system and created the XR Input system.

The XR Input system exists in parallel to the normal `Input` system that I've used in the past. Unlike `Input` which makes it possible to track inputs from specific pre-defined things, we can use the XR Input system to query the current capabilities of the VR system our computer is running. This makes it possible for us to ask Unity for the "Right Hand" or another similar object and get something understandable back. Once we have that object we can test various capabilities of the "Right Hand" such as the Trigger or Primary Axis of the controller. This makes it possible for us to have a lot more control over how input in our game works and also makes it far easier for us to adopt our game to different controllers used in VR.

This is my first time working with this new system and while it has its quirks (most VR API's are still maturing in my experience) I'm pretty happy with how well it works. Adopting it is also relatively straight-forward and doesn't require a dramatic amount of additional work when migrating from an existing system built on-top of the original `Input` based system.

What do you think?

Unity's documentation for the XR Input System is here and includes multiple additional examples: https://docs.unity3d.com/Manual/xr_input.html

The d-pad in this videos thumbnail was created by Lorc for the `game-icons` projects: https://github.com/game-icons/icons/tree/master/lorc. 

Join the World of Zero Discord community: https://discord.gg/hU5Kq2u