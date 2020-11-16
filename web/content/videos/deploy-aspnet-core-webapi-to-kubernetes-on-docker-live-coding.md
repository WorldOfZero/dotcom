---
title: "Deploy ASP.NET Core WebAPI to Kubernetes on Docker - Live Coding"
alias: ["/v/sC6_iwmqZ_E"]
date: 2018-01-29
featured_image: https://i.ytimg.com/vi/sC6_iwmqZ_E/mqdefault.jpg

---

{{% youtube id="sC6_iwmqZ_E" %}}

Docker for Windows/Mac has recently introduced built in Kubernetes support. With no prior experience using Kubernetes on Docker let's see if we can setup and deploy a simple ASP.NET Core project to our new K8S cluster and what kind of issues we run into.

Kubernetes functions as a system administrator as a service and builds on top of Docker to provide management for services. This allows your services to smoothly deploy on top of one another (rolling deployments with no down time), automatically handle hardware failure or service failure and easily adjust to load using load balancers and auto-scaling pods.

The .NET Docker Containers we use are from here: https://github.com/dotnet/dotnet-docker Note that the `dotnet` images are for dotnet core 1.0 and will not compile dotnet core 2.0. You'll need to update the image names like we do in the video to make it work.

Learn more about Kubernetes (K8S) here: https://kubernetes.io

Pick up Docker For Windows here (Currently Kubernetes support is only available on Edge version 18.* releases): https://www.docker.com/docker-windows

Scott Hanselman has created a short blog that also walks through how to setup ASP.NET Core on Kubernetes and uses a very similar solution to the one we create here. If you're looking to get started quick it's a great resource: https://www.hanselman.com/blog/HowToSetUpKubernetesOnWindows10WithDockerForWindowsAndRunASPNETCore.aspx

For more information on Docker's Kubernetes implementation check out their articles here: https://www.docker.com/kubernetes

Kubernetes for Docker is also available on Docker for Mac. If you try that out let me know how it goes!

Try adding Helm to your Kubernetes Environment to make managing deployments and their dependencies easier: https://youtu.be/U7H6KpCmckI

Join our Discord channel: https://discord.gg/hU5Kq2u