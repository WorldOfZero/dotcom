---
title: "Neopixel's and Serial Communication With An Arduino Micro - Data Cube - Part 2"
aliases: [/v/oVe0hbBFCi4/]
date: 2017-04-02
featured_image: https://i.ytimg.com/vi/oVe0hbBFCi4/mqdefault.jpg
tags: [ arduino ]

---

{{% youtube id="oVe0hbBFCi4" %}}

We're going to start looking into communicating over serial ports with our arduino now. The final goal here is to be able to send information about what to draw over a serial connection from our web server down to the arduino. The arduino then accepts the information and translates that into physical pixels that we can display on our lightstrip. We don't have a web server yet, or any sort of client at all, but we can swap that out for serial terminals instead.

In order to build this we need to do two things. First allow a single pixel to be moved down our light strip and second to accept information from another device about when and how to create those pixels.

Creating the marching pixel is simple, just move every color down an array of pixels until it falls off the end. Serial communication is a bit more difficult. Normally we'd have two threads, one accepting serial input and one handling displaying that input on the LED's. Arduino's can't really do that so we're going to need another solution. The solution is not pretty and involves me screwing up pretty much every part of it. We are going to create a non-blocking serial communication that first tests if any information is ready to be read from the connection before attempting to read. This prevents us from blocking our main program loop! If data is ready to be read we read it into a data queue. This is because it is possible for part of a color to be sent, but not the whole thing. We need to be able to handle that!

Once enough data has entered our queue (3 bytes) we have enough information to create our R, G and B values for our color. We can clear our queue and push that new color onto our LED light strip to draw. Once that's happened it behaves just like the original pixels we started with. Then it's just a bunch of mashing of buttons to send various data to our light strip and prove everything is working expected.

The code that we are using for the Arduino can be found on GitHub here: https://gist.github.com/runewake2/8b40408818087d4a61e79becfab44857

We use CoolTerm in this video to handle communicating with our Arduino over the serial port. The app was written by Roger Meier, is cross platform (Windows, Linux and Mac) and can be found here: http://freeware.the-meiers.org