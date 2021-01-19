---
title: "Creating Custom GitHub Issue Templates"
aliases: [/v/nKvvdoAjqG4/]
date: 2020-11-16
featured_image: https://i.ytimg.com/vi/nKvvdoAjqG4/mqdefault.jpg
tags: [ git,opensource,tutorial ]

---

{{% youtube id="nKvvdoAjqG4" %}}

In order to create more accessible open source projects GitHub has introduced templates for Issues and Pull Requests to help improve the clarity and quality of new issues and open pull requests. These templates allow you to provide layouts for people looking to file issues against your project and allows them to be constructed in a more standard way. This can help increase your ability as a maintainer to sustain your open source project. In this video we will be taking a look at implementing GitHub Issue Templates for my Unity Visualizations project.

GitHub Issue Templates are markdown files located in the `.github/ISSUE_TEMPLATE` directory. These files are separated into two parts. The first contains metadata about the issue including who should be assigned, any labels to apply, the name of the issue and more. The second part of the markdown file will be used as the body of the issue. You may use this to layout the format and expected content of the new issue.

An example template might look like this:

```md
---
name: '🐞 Bug Report'
about: 'report a bug with an existing effect'
title: '[BUG] What is wrong?'
assignees:
  - runewake2

---

### Describe the Issue

Please describe what is happening
```

> Note: GitHub lists templates in alphabetical order based on file name so if you would like to create a specific order for templates you may start the file names with numbers. For example `1_tutorial.md` and `2_question.md`.

GitHub also allows you to configure Issue's using the `.github/ISSUE_TEMPLATE/config.yml` file. This file allows you to specify if blank issues are allowed and makes it possible to provide a series of contact links to external resources (project documentation, website, forum etc)

```yml
blank_issues_enabled: true
contact_links:
  - name: 🎥 Visual Effects Video Playlist 
    url: https://www.youtube.com/playlist?list=PLEwYhelKHmig6ttzH0nRL3OOQsGLtVrtX
    about: View the Visual Effects examples playlist on YouTube
  - name: 👩‍💻 World of Zero
    url: https://worldofzero.com
    about: The World of Zero website
```

If your curious what these changes will look like you can see the implementation for my Unity Visualizations project: https://github.com/WorldOfZero/UnityVisualizations/tree/master/.github/ISSUE_TEMPLATE

There is more information about using Issue Templates in GitHub's documentation: https://docs.github.com/en/free-pro-team@latest/github/building-a-strong-community/using-templates-to-encourage-useful-issues-and-pull-requests

If you're hosting your project on GitLab instead issue templates are also available there. There is more information about how to adopt those here: https://docs.gitlab.com/ee/user/project/description_templates.html#creating-issue-templates

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u