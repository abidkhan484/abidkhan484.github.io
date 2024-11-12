+++
author = "Md Abid Khan"
title = "Post in linkedin with the event of my blog post using Github action"
date = "2024-11-07"
description = "These changes will streamline the process of posting on LinkedIn after publishing a new blog, making automation much more efficient."
tags = [
    "Linkedin API",
    "Github Action",
    "Golang",
]
categories = [
    "Automation",
    "CI",
    "DevOps",
]
aliases = ["post-in-linkedin-by-blog-post"]
+++

### Objective

The purpose of this implementation is to automate the process of sharing my blog posts on LinkedIn. Whenever I publish a new post on my blog, it will automatically be shared as a LinkedIn post. This helps streamline my workflow and saves time by eliminating the need for manual posting on LinkedIn.

### Introduction

For this implementation, the application utilizes the LinkedIn API along with additional settings configured in GitHub Actions. These settings trigger a Go script to automatically post on LinkedIn. The blogging platform used is a Hugo application, where content is added as markdown files in the `content/posts` directory.

The Go script parses the markdown file to extract relevant information needed for the LinkedIn post. Once the necessary data is retrieved, the script triggers the automated posting process to LinkedIn. This setup streamlines content sharing by seamlessly integrating blog posts with LinkedIn updates.

### Playground


##### GitHub Actions Workflow

In the GitHub Actions workflow, there's a job to check for new posts. The `check` job uses `git diff` with `fetch-depth: 2` to compare the latest two commits (`HEAD^` and `HEAD`). It looks for changes in files with a `content/` prefix, since all posts are stored in that directory. If a new post is detected, the subsequent `build-and-deploy` job is triggered.

Additionally, a separate job is included to handle posting to LinkedIn. This job runs a script to automate the LinkedIn posting process.

##### Posting to LinkedIn
The LinkedIn posting script contains a function called `getNewPosts`, which checks for any new Markdown files added to the `content/` directory by using `git diff` on the latest commits. If a new file is found, another method called `getMetaValue` parses the content. This method extracts metadata fields like `title`, `description`, `url`, etc., using regex patterns based on Hugo's structured front matter for titles, descriptions, and tags.

To post on LinkedIn, you'll need to create a LinkedIn app to generate an access token. This token is obtained using the app's client ID and secret via LinkedIn's OAuth flow. You can manually generate the access token from the [LinkedIn OAuth Tool](https://www.linkedin.com/developers/tools/oauth), which also includes a sign-in prompt for user authorization.

After obtaining the access token, you need to retrieve the user ID for posting. The script uses the parsed metadata (e.g., title, description, and URL) to create the appropriate payload for LinkedIn's API. The actual post request is made using the [LinkedIn UGC Post API](https://learn.microsoft.com/en-us/linkedin/compliance/integrations/shares/ugc-post-api?tabs=http), which allows the automated GitHub Action to publish the content on LinkedIn.


### Improvements

Here are some suggested improvements:

1. Currently, the auth token is stored in GitHub Secrets and needs to be updated every two months. A more efficient approach would be to use the client ID and client secret to generate an authorization code and refresh the auth token automatically.

2. Extracting images from the blog to include in LinkedIn posts.

3. The existing script only supports parsing content from the Hugo application. It could be enhanced to support parsing from other platforms with similar functionality, allowing for greater flexibility.


### Reference

1. [Go dev](https://go.dev/)
2. [Hugo io](https://gohugo.io/)
3. [Github action to deploy hugo](https://gohugo.io/hosting-and-deployment/hosting-on-github/)
4. [Readme editor](https://readme.so/)

