---
title: "Using Git Hooks"
aliases: [/v/6MzXs35hLOI/]
date: 2022-11-12
featured_image: https://i.ytimg.com/vi/6MzXs35hLOI/mqdefault.jpg
tags: [ git,shell,tutorial,csharp ]

---

{{% youtube id="6MzXs35hLOI" %}}

Git Hooks provide a way for you to hook into your local git installation and attach additional behavior to common git actions. For example: validating that your code builds during a commit, confirming git commit messages or running your test suite before pushing your code changes to your peers. Because git hooks run on your local machine and are not checked in with the rest of your code you can also use them to automate certain parts of your workflow that might be unique to you.

> Note: Git Hooks are not a replacement for a CI/CD pipeline like GitHub Actions, CircleCI etc!

You can add a new Git Hook by adding a file to the `.git/hooks` directory of your project that matches one of the supported git hooks. The supported git hooks are:

* `pre-commit`
* `prepare-commit-msg`
* `commit-msg`
* `post-commit`
* `pre-push`
* `applypatch-msg`
* `pre-applypatch`
* `post-applypatch`
* `pre-rebase`
* `post-checkout`
* `post-merge`
* `post-update`
* `pre-auto-gc`
* `post-rewrite`

You can find [more about what each of these git hooks do in the Git documentation](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks). Some of these may not be helpful if your doing local development with an existing remote repo somewhere like GitHub or GitLab.

Files you change in the `.git` directory will not be checked into your git repository and therefore will not be visible to the rest of your team. If you'd like to share your pre-commit and other hooks with your team you can place the scripts somewhere inside your project and create a symlink to them in the `.git/hooks` directory.

> Note: make sure that you make your Git Hooks executable or git will not be able to access and run them!

If you'd like to be able to edit `.git` files more easily inside of Visual Studio Code you'll need to disable the automatic file exclusion. You can do this by updating your `settings.json` file by adding the following setting:

```json
"files.exclude": {
    "**/.git": false
},
```

This setting prevents all `.git` directories in your project - regardless of where they are located - from being hidden.

You can also bypass Git Hooks using the `--no-verify` (shorthand `-n`) argument when running git commands in your CLI. This will completely bypass these hooks and prevent them from running. If you have a Git Hook that requires tests to pass before pushing running `git push --no-verify` would allow you to push your changes for example.

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u