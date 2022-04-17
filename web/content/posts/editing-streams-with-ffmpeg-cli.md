---
title: 'Quickly Edit Streams with the FFmpeg CLI'
date: 2021-03-09
draft: false
description: FFmpeg allows you to manipulate video files from your command line. Lets explore how to trim videos from streams more quickly by taking advantage of some of FFmpeg's features.
tags:
- tools
- tip
- tutorial
featured_image: "images/posts/tutorials/ffmpeg-cli-stream-edit.png"
---

![Using FFmpeg to edit stream vods](/images/posts/tutorials/ffmpeg-cli-stream-edit.png)

`FFmpeg` is a tool that helps you work with audio and visual files. It can significantly improve the speed of quick edits to a video or stream by editing a copy of the original instead of re-encoding your entire video.

For example if you'd like to grab a 5 minute long clip from your `source.mp4` video that starts at the 5 minute mark until the 10 minute mark you'd run something like the following to save the new clip as `modified-copy.mp4`.

```sh
ffmpeg -i ./source.mp4 -ss 00:05:00 -to 00:10:00 -c copy modified-copy.mp4
```

Lets break down what these different flags mean:

- `-i ./source.mp4` is used to specify an input source. In this case we're referring to a video file named `source.mp4`.
- `-ss 00:05:00` is used to set a start time offset. This will skip the amount of time specified forward in the input source and then begin the edited clip.
- `-to 00:10:00` is used to set an end time for the clip. This will cause the exported clip to only include content up to the provided time in the input source.
- `-c copy` is used to specify a codec. In this case the `copy` codec is used to help improve the speed of encoding. `copy` is a special value in `FFmpeg` that tells `FFmpeg` not to reencode your video.

> Note: You may leave off either `-ss` or `-to` parameters to start from the start of the input source or to include all content until the end of the input source.

`FFmpeg` is available for macOS, Windows and Linux distributions.

> If you would like to remove audio from a video you can use the `-an` flag to disable audio in the output file. This is useful if you need to remove white noise from a video or otherwise want it silent.

You can find out more about using `FFmpeg` at the [official `FFmpeg.org` site](https://ffmpeg.org/).
