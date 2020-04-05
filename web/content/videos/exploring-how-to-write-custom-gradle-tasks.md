---
title: Exploring How To Write Custom Gradle Tasks
date: 2019-08-14T01:16:01.000Z
tags:
  - java
  
featured_image: https://i.ytimg.com/vi/QJr-knJV2Qo/mqdefault.jpg
---

{{< youtube id="QJr-knJV2Qo" >}}

Gradle is a build tool for Java and other JDK based projects that uses a series of tasks to compile, test and run your projects. One of the advantages of Gradle being based upon tasks instead of specific features is that it is very extensible. This means different tools can add more features to the project as needed (for example a linter can create a `gradle lint` task). It also means *we* can add more features to our projects by creating our own custom tasks.

In this video we're going to explore the basics of creating a new gradle project with `gradle init` and then adding a new custom task that can print information to our terminal or run a custom command line tool.

To register a basic task named `hello` in Gradle you could use. This task will print out a cool cat:

```groovy
tasks.register('hello') {
  def kitty = """               /\\____/\\    __
             .'  \"\"\"\"  `,-'  `--.__
        __,- :   -  -  ;  " ::     `-. -.__
     ,-sssss `._  `' _,'"     ,'~~~::`.sssss-.
    |ssssss ,' ,_`--'_    __,' ::  `  `.ssssss|
   |sssssss `-._____~ `,,'_______,---_;; ssssss|
    |ssssssssss     `--'~{__   ____   ,'ssssss|
     `-ssssssssssssssssss ~~~~~~~~~~~~ ssss.-'
          `---.sssssssssssssssssssss.---'"""
    println kitty
}
```

To run this task you would run `gradle hello` in the same directory as the build.gradle file you added this to.

If you want to learn how to install Gradle, learn more here: https://docs.gradle.org/current/userguide/installation.html

Gradle's docs are available on their website: https://guides.gradle.org/writing-gradle-tasks/

More documentation and example use cases of the Gradle `exec` API: https://docs.gradle.org/current/dsl/org.gradle.api.tasks.Exec.html

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u