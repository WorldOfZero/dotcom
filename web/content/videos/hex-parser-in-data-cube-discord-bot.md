---
title: "Hex Parser in Data Cube Discord Bot"
alias: [/v/bhUTjt0BOEs/]
date: 2018-01-09
featured_image: https://i.ytimg.com/vi/bhUTjt0BOEs/mqdefault.jpg

---

{{% youtube id="bhUTjt0BOEs" %}}

There are a number of ways to represent color in text. One of the more common versions is to use hex codes to represent the value.

The standard format for a hex value is "#RRGGBB" where R, G and B represent the red, green and blue channels of the color in base 16. This gives us a range from 0-255 for each color channel.

We're going to implement a way to parse these colors from scratch. There are other, more efficient ways to do this but it'll give us a good opportunity to dive a bit deeper into the concept. The final goal here is to add support for our Discord Data Cube bot to consume hex colors. This means you can send custom colors to Data Cube easily.

Our implementation of our hex parser here is a more manual approach than is necessary. You can accomplish the same effect using a number of simpler implementations including the UInt32.TryParse(). Simpler, more production ready implementations can be found here: https://stackoverflow.com/questions/98559/how-to-parse-hex-values-into-a-uint

Come play with the Data Cube bot in the World of Zero Discord channel: https://discord.gg/hU5Kq2u