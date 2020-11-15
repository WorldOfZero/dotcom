---
title: "Reactive Serial Communication in UWP - Data Cube"
date: 2017-09-19
featured_image: https://i.ytimg.com/vi/fHQk_vwEOiM/mqdefault.jpg

---

{{% youtube id="fHQk_vwEOiM" %}}

Data Cube is back! The Internet of Things coolest way to visualize interactive data. Data Cube is an IoT device that allows interactions from other places (YouTube Views, Twitter Tweets or simple Website Views) to be visualized as data traveling along an LED strip.

This video fixes a lot of the problems we were encountering earlier with running the data stream as an ASP.NET web service. Instead we've changed things a bit, the app now runs as a Universal Windows App for IoT and uses that for serial communication. The goal is to stream the data messages over a messaging queue we'll work on in the next video.

For now we're implementing a Reactive Extensions Observer that wraps our Serial Port communication. This enables us to effectively create a pipe so messages can be pulled in and we can output data across our serial port. Simple, but really handy.

Want to catch up on Data Cube? Check out the original videos here: https://www.youtube.com/playlist?list=PLEwYhelKHmij6oxm_10RV4wHhp_geEkMM

Learn more about the Reactive Extensions on their site. It's a great way to build event driven applications: http://reactivex.io

Discord: https://discord.gg/hU5Kq2u