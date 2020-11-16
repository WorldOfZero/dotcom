---
title: "Embedding Shadertoy in Hugo Websites - Custom Hugo Shortcodes"
alias: [/v/i100RhwZUnQ/]
date: 2020-01-06
featured_image: https://i.ytimg.com/vi/i100RhwZUnQ/mqdefault.jpg

---

{{% youtube id="i100RhwZUnQ" %}}

Hugo Shortcodes are a way to use short snippets in your Hugo site that embed custom parameterized objects. Some built-in shortcodes can embed GitHub Gist code snippets, YouTube videos or Twitter posts. If Hugo does not provide a built-in shortcode for you however you'll need to create your own shortcode. Luckily, this is relatively straightforward.

Creating a custom shortcode begins by creating an `html` file in the `layouts/shortcodes` directory. The file should be named after the shortcode you'd like to create. For example `example.html` will create the `example` shortcode. Once you've created the file you can fill it with a combination of hugo's markup language and standard html. The markup language hugo provides allows you to access parameters or otherwise modify the behavior of the shortcode you're creating. In our case we'd like to embed a Shadertoy shader. Every shader on Shadertoy has a unique embed link based upon its ID so we can create a shortcode that accepts a shader id and plop the value into an iframe. Embed... done.

The source for the custom shader shortcode I use is in this gist: https://gist.github.com/runewake2/3f5d3b4827beefb56a66e9c228979820

Hugo is a really easy to use static website generation tool (https://gohugo.io/) that can turn your Markdown files into websites. Some documentation on custom Hugo shortcodes: https://gohugo.io/templates/shortcode-templates/

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u