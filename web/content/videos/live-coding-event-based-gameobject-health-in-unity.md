---
title: "Live Coding Event Based GameObject Health in Unity"
alias: ["/v/unRBfHyYgJ8"]
date: 2019-03-27
featured_image: https://i.ytimg.com/vi/unRBfHyYgJ8/mqdefault.jpg

---

{{% youtube id="unRBfHyYgJ8" %}}

Lets make a component that can track a GameObject's health in Unity and alert other subscribed objects when the health is changed. By allowing objects to subscribe to the health change events as they need to observe them we can remove the need for a majority of objects to constantly track the health of an object over time. Objects simply subscribe when they care, react when they get events and unsubscribe when they don't care about the updates anymore. Theoretically this should be relatively simple and in the long term make interacting with objects in an event based way a lot easier to build on. That's the goal at least.

This is largely intended as a proof of concept at this point and so I can learn Unity's event system again. It's been a while since I've used it personally and picking that knowledge back up may take some time.

In order to test this event based health tracker we'll add an extra component that allows us to publish health change events and listen for the event that our new component publishes. We can extend this later by adding automated unit tests with the new Unity Test Runner, but for now manually testing ought to serve our purpose.

This is part of the Asteroids VR project I'm working on. A VR game based on the classic Asteroids game but with a twist for VR to take advantage of the new experiences we can get when players can move around in their play space.

You can see more about the development of Asteroids VR here: https://www.youtube.com/playlist?list=PLEwYhelKHmig7HVi7_WahwXRWPycEJ5xC

More documentation on Unity's Events is here: https://docs.unity3d.com/ScriptReference/Events.UnityEvent.html

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u