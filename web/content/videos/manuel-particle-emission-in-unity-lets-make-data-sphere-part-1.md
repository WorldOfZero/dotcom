---
title: "Manuel Particle Emission in Unity - Lets Make Data Sphere - Part 1"
date: 2016-12-26
featured_image: https://i.ytimg.com/vi/7ZGJlSCcp1c/mqdefault.jpg

---

{{% youtube id="7ZGJlSCcp1c" %}}

Enter Data Sphere. A new project with a microservice based design all about visualizing data. The design uses Unity's Particle System to drive the visualization and will use separate applications to deliver the data. This allows anyone to plug into the visualization without having to modify the unity project at all. This makes the entire project extremely easy to use and extend. It also makes it really easy to maintain. We may have a number of components, but each component will be simple and the total code for each will be minimal.

This video specifically focuses on the design of the particle emitter. What will be used to display our data points in unity. To begin with we'll be designing a sphere based visualization (thus the name) for location based data. We'll be identifying a way to use the yaw and pitch along with a trigonometry function to calculate the position on a sphere. Once we have that we'll explore a few quick debugging cases to ensure that everything is functioning as it should and discuss the difficulties of rendering transparent objects.

This is just the tip of the iceberg for this project. After this we'll expand it to accept inputs and then start working on the other services that will plug into this tool. Once it starts to come together we'll be able to map tweets to our sphere and hopefully be able to bring this visualization into VR or AR so it can be manipulated and explored in more intuitive ways.

You can download the current version of the project from GitHub here: https://github.com/WorldOfZero/Data-Sphere