---
title: "Starting to Build a Spigot Minecraft Mod - Building MC-Clone - Part 1"
date: 2019-08-14
featured_image: https://i.ytimg.com/vi/ODLx4yJNtJA/mqdefault.jpg

---

{{% youtube id="ODLx4yJNtJA" %}}

Lets get started building MC Clone a new plugin/mod for minecraft servers running spigot that will allow players to create duplicate parts of the world with different settings. This means that you could clone your base from your survival world into a creative test world to try out the next major addition for your base. The plugin is being built on top of [spigot's api's](https://www.spigotmc.org/) and Docker which allows us to create new commands inside of Minecraft and then Docker provides a container layer so we can easily reproduce new Minecraft servers. In this video we're going to focus on how to create new commands with Spigot's API's.

To do this we'll need to implement a [`CommandExecutor`](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/command/CommandExecutor.html). This is an interface which has a single `onCommand` function that needs to be Overridden. `onCommand` will then be invoked when the command is used in-game and will pass a number of useful properties into the function for you to use (like who used it and what arguments were used).

There are three configurations you need to make in order to actually get your new Command to execute though.

## `plugin.yml`

The first place you need to configure is the `commands` section of the `plugin.yml` which is used to define the properties of your plugin/mod. In order to do this you'll need to add the following your `yaml` file.

```yaml
commands:
  commandName:
    description: "A custom minecraft command in spigot"
    usage: "/commandName"
    aliases: ["commandAlias"]
```

The `commandName` is the name of the Command. Players will see this in the servers auto-complete. The `commandName` is also used later to register the `CommandExecutor`.

The description describes what the command is for, usage is displayed as helper text for how to use the command and aliases are alternative ways to call the command. In this example `/commandAlias` could be used exactly like `/commandName`.

## `App.java`

This is the main entry point for your program. When our plugin is loaded we need to register the `CommandExecutor` to connect with the command setup in our `plugin.yml`. To set this up you'll want to add something like this to your App's `onEnable` function.

```java
MyCommandExecutor command = new MyCommandExecutor ();
this.getCommand("commandName").setExecutor(command);
```

Note: `commandName` should match your `commandName` from the `plugin.yml` above.

##  `MyCommandExecutor.java`

The final piece of the puzzle is a class which implements `CommandExecutor`. This is the definition of the `CommandExecutor` you pointed to in the `App.java` code. 

```java
public class MyCommandExecutor implements CommandExecutor {

  @Override
  public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {
    sender.sendMessage("Ten four. Commencing operation dance off."); // 💃🕺
    return true;
  }
}
```

Once you have configured all three of these properties you should be able to build your plugin, install it on your server and run it. You should be able to type `/commandName` in your server and get "Ten four. Commencing operation dance off." as a response.

***

MC-Clone is a project to create a Minecraft mod which will allow you to clone all or part of your current world into a brand new world with modified settings. For example copying your survival build into a creative world so you can test your next project. The mod will allow you to host these new servers in Docker and will also have some logic to shut down the custom servers once they become inactive so you're not running an ever increasing number of servers. These videos are my process of creating the plugin and what I learn along the way.

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u