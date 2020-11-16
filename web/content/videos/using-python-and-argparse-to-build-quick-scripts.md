---
title: "Using Python and Argparse to Build Quick Scripts"
aliases: [/v/cR1I2zYveRI/]
date: 2018-05-24
featured_image: https://i.ytimg.com/vi/cR1I2zYveRI/mqdefault.jpg

---

{{% youtube id="cR1I2zYveRI" %}}

Python is a really handy language for scripting, particularly when compared to a compiled language like C# or Java. Lets take a look at how we can use python and a python module called argparse to build simple python scripts that are extremely easy to use.

Argparse is a module for python that makes adding command line arguments to your programs extremely easy. It also helps with input validation and documentation by automatically generating error messages, parsing your input and automatically creating `--help` and `-h` commands to display help for your program.

This makes writing tools super easy and helps make sharing your tools with other people a lot easier. They don't need to dig into the docs anymore and can just run `python mycoolscript.py --help` to learn how to use it.

You can install the argparse module using pip:

```bash
pip install argparse
```

Want to explore Argparse in more depth? It's documentation includes a number of great examples and more: https://docs.python.org/3/library/argparse.html

A simple example of using argparse may look like this:

```python
import argparse

parser = argparse.ArgumentParser(description='print a list of integers')
parser.add_argument('integers', metavar='N', type=int, nargs='+',
                    help='one or more integers to print')

args = parser.parse_args()
print(args.integers)
```

This will automatically validate that at least 1 integer is passed to the function and generate a help command that can be run using either `--help` or `-h`.

Join the World of Zero Discord: https://discord.gg/hU5Kq2u