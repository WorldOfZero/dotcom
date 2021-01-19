---
title: "Getting Started Building Pong in my Terminal - Pong in Bash - Part 1"
aliases: [/v/fEtcGFEiuQM/]
date: 2020-06-24
featured_image: https://i.ytimg.com/vi/fEtcGFEiuQM/mqdefault.jpg
tags: [ bash,shell,tutorial ]

---

{{% youtube id="fEtcGFEiuQM" %}}

I've been exploring a few of the fun ways you can write text to a terminal. One of the more interesting commands available for this is `tput`. The `tput` command provides a variety of options for updating or checking the state of your terminal. This includes things like making text **bold**, *italics* or underlined. You can leverage `tput` to change the color of the foreground and background of your terminal. For us though we're going to use it to position the cursor. This will allow us to simulate moving an object in the terminal like the ball in pong by updating the cursor position we draw at.

For this video we'll be looking to explore that capability by starting work on building pong in our shell. Our initial goal is to build a simple ball that bounces left and right horizontally across our screen (vertical movement and paddles will come later). This will involve creating a basic REPL (read-execute-print-loop) script in bash that can track the velocity and position of the ball, print the ball at its current position and test if the ball has collided with either side of the terminal.

* `tput cup [row] [column]` updates the cursor position to the provided row and column (zero indexed).
* `tput cols` returns the number of columns in the current terminal window.
* `tput rows` returns the number of rows in the current terminal window.

Our basic script looks like this after implementing this:

```sh
#!/bin/bash
width=$(tput cols)
echo "width = ${width}"

ball_x=$((width / 2))
echo "ball pos = ${ball_x}"

ball_vel_x=$((1))

trap 'tput cnorm; exit' SIGINT
tput civis

while true; do
    ball_x=$((ball_x + ball_vel_x))
    
    # Hit the right hand wall
    if [ $ball_x -gt $width ]; then
        ball_vel_x=$((-1))
    fi

    if [ $ball_x -lt 1 ]; then
        ball_vel_x=$((1))
    fi

    clear
    tput cup 0 $ball_x
    echo "o"
done
```

> Note: not mentioned in the video, but I've included a `trap` to restore the cursor to its normal visibility when you exit the script (more on this in a future video).

If you're looking for a deeper dive into tput linuxcommand.org has put together a great resource with a number of examples demonstrating many of the features of tput: http://www.linuxcommand.org/lc3_adv_tput.php

I've been live streaming development and some games on Twitch at: https://www.twitch.tv/worldofzerodev

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u