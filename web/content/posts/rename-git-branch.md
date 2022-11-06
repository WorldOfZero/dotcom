---
title: Renaming a Local Git Branch
date: 2022-11-06
tags:
- git
- tip

---

> note: When you rename your git branches make sure you double check any connected CI jobs you have associated with the repository. Those will not be updated to use the new branch name.

## Local Branches

1. `checkout` the branch you would like to rename: `git checkout my-outdated-branch`.
2. Use the `-m` parameter to rename the branch: `git branch -m my-new-branch`

> note: You can also use `git branch -m my-outdated-branch my-new-branch` to do the rename with a single command.

You can check the name of your branches using `git branch -a` to list all local branches. For example:

```bash
> git branch -a
  main
* my-new-branch
  remotes/origin/main
```

## Remote Branches

If you've updated your branch name remotely already the change will not be reflected locally until you update your clone.

1. Update your local branch to match the remote changes: `git branch -m my-outdated-branch my-new-branch`
2. Fetch the update `git fetch origin` (if you're using more than 1 remote, update `origin` in these commands to be the remote you are trying to sync with)
3. Update the upstream of your local branch: `git branch -u origin/my-new-branch my-new-branch` (This updates the upstream of your local `my-new-branch` to point at `origin/my-new-branch`)
4. Optional: If you are updating your `main` branch you can use `git branch set-head origin -a` to update the default branch of the `origin` remote