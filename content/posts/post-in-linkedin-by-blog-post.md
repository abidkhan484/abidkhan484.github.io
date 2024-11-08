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


### Diagrams


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

