---
title: "Quickly Trim Video Snippets on the Command Line with FFmpeg"
aliases: [/v/Cg2omJAOH30/]
date: 2021-03-11
featured_image: https://i.ytimg.com/vi/Cg2omJAOH30/mqdefault.jpg
tags: [ tip,tutorial,tools,shell,opensource ]

---

{{% youtube id="Cg2omJAOH30" %}}

FFmpeg is an open source tool that allows you to edit, encode, decode, transcode and more audio or video from your command line. This can make it a really useful tool when you need to change file formats for a video or quickly cut out parts of a video. Here we're going to look at the use case of editing a stream's intro and outro scenes from a video for YouTube. By doing this in FFmpeg instead of through my normal video editor I can avoid re-encoding the edited video. This means that the process is significantly faster. Cutting a few minutes from a multi-hour video takes only a few minutes (on my machine). This can make FFmpeg a useful addition to your video editing pipeline if you're already familiar with command line tools.

To cut a 5 minute long clip out of a larger video named `original-video.mp4` we'd run a command like:

```sh
ffmpeg -i original-video.mp4 -ss 00:05:00 -to 00:10:00 -c copy edited-video.mp4
```

* `-i ./source.mp4`: is used to specify an input source. In this case we're referring to a video file named `source.mp4`.
* `-ss 00:05:00`: is used to set a start time offset. This will skip the amount of time specified forward in the input source and then begin the edited clip.
* `-to 00:10:00`: is used to set an end time for the clip. This will cause the exported clip to only include content up to the provided time in the input source.
* `-c copy`: is used to specify a codec. In this case the `copy` codec is used to help improve the speed of encoding. `copy` is a special value in `FFmpeg` that tells `FFmpeg` not to reencode your video.

> Note: both `-ss` and `-to` are optional if you'd like to include content from the start or end of the source video.

Using FFmpeg to quickly trim a video is only touching the surface of what the tool is capable of. If you'd like to learn more I recommend diving into the [documentation](https://ffmpeg.org/documentation.html).

Explore more about FFmpeg at the official website https://ffmpeg.org
Learn how to install FFmpeg: https://ffmpeg.org/download.html
If you'd like to use FFmpeg for other things (like converting video snippets to GIFs) check out this blog post from GIPHY: https://engineering.giphy.com/how-to-make-gifs-with-ffmpeg/
Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u