---
title: "Starting to Setup the Components - Day 1 - Building a Health Dashboard"
alias: [/v/eim3djMXLus/]
date: 2020-06-30
featured_image: https://i.ytimg.com/vi/eim3djMXLus/mqdefault.jpg

---

{{% youtube id="eim3djMXLus" %}}

This July I'm trying something a bit different. We're going to try to create complete projects each week of the month. Unlike some of the more focused videos I've created, these projects are intended to be less focused and more classic live-coding.

This is the first day of the first project: a private health database with dashboards. It'll largely focus on automation and orchestration of open source databases and Grafana dashboards. These are tools I've worked with in the past but have only touched briefly in the past 2 years. My hope is that this serves as a way to refresh my memory and leverage them to build something new. I also have thoughts on how we might be able to improve configuring our database and more.

The goal of this project is to create a persistent database and dashboard that can capture a variety of health characteristics and provide a way to track them. It should support data backups, automated database setup and some basic health checks to ensure things are staying running and healthy.

To accomplish this we'll be taking advantage of multiple open source tools including Grafana for dashboards, PostgreSQL for data storage and Docker for our container support. On the first day it's mostly about re-acquainting myself with the tooling and getting the basics setup. Once we have that the goal is to be able to slowly expand the project to include the maintainability and operation goals we have for this project. I'm definitely rusty with these tools and hopefully there is a good amount of extra space in the week of time we have for this project to be completed.

If you'd like to catch the live streams when I work on these projects you can find me on Twitch at https://www.twitch.tv/worldofzerodev

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u