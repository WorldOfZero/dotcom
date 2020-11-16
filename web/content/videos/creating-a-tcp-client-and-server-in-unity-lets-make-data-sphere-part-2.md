---
title: "Creating a TCP Client and Server in Unity - Lets Make Data Sphere - Part 2"
alias: [/v/WBYRTlaUSsk/]
date: 2016-12-27
featured_image: https://i.ytimg.com/vi/WBYRTlaUSsk/mqdefault.jpg

---

{{% youtube id="WBYRTlaUSsk" %}}

This video is a mess. We'll start by attempting to investigate named pipes in Unity. Turns out those aren't really a very good option. Mostly because they don't exist in the version of .NET Unity uses. Since that option is out we'll try working with sockets. I don't like sockets and as you'll see my knowledge of low level networking is a bit... stretched. Moving beyond sockets we'll use an included abstraction layer that adds support for TCP connections. Enter the TcpListener and TcpClient classes. These will allow us to create a TCP server and client.

Once we have both of those created we can start exchanging our messages. This will allow any of our other clients to connect and send TCP messages to our Unity game. Allow the game to parse and process those messages and then allow use to do really cool stuff with it.

For now, all of this is included as part of the Unity game itself. But we'll be splitting that out into a separate project shortly which will allow other simple project to send TCP Packets to our project and have them display for us. Sense we are using TCP this will work on any platform and we can serve our data from Linux, Mac's or Windows PC's or Servers. This is super nice and makes the solution extremely flexible. Also, since it's using TCP any language that supports TCP messages can be used to develop these plugins for providing data. You can use C++, C#, Java and any other language you feel like. That's neat. I like that.

It was a bumpy road to get here, but the results are pretty fantastic.

This project is open source on GitHub: https://github.com/WorldOfZero/Data-Sphere

This video also includes some details about High Dynamic Range (HDR) rendering, Unity 5.5's new Particle Light system and deferred rendering. All super cool features.

Learn more about the TCP Listener and Client we are using on MSDN!
TCP Listener:  https://msdn.microsoft.com/en-us/library/system.net.sockets.tcplistener(v=vs.80).aspx
TCP Client: https://msdn.microsoft.com/en-us/library/system.net.sockets.tcpclient(v=vs.80).aspx