+++
author = "Md Abid Khan"
title = "Automate API Testing using Postman & Newman"
date = "2022-10-27"
description = "Automate API Testing using Postman & Newman"
tags = [
    "Postman",
    "Newman",
    "API Testing",
]
categories = [
    "Automation",
]
authors = ["Abid"]
aliases = ["automate-api-testing-using-postman-newman"]
+++
# Automate API Testing using Postman & Newman

## Introduction

Postman is one of the most used tools for a developer. Most of the time, we develop APIs and test those individually. But in some scenarios, we have to test APIs in batches if they are dependent on each other. By utilizing the knowledge, we can do our tasks easier as well as minimize repeating tasks. Through this, our dev testing time can be reduced.

## Prerequisites

- [Postman](https://learning.postman.com/docs/getting-started/installation-and-updates/)
- [Newman](https://www.npmjs.com/package/newman) and some of its required library

## Playground

In this task, we are using JSON placeholder APIs. Postman has the feature to create assertions in the `Tests` tab. Also, it has the `Pre-request script` tab to run the script before the API request. To minimize the complexity, we are checking only the returned status code of the Tests tab and setting variables accordingly.

A snippet to set variables in the POST request body is given below.

```json {linenos=true}
{
  "userId": {{userId}},
  "title": "{{title}}",
  "body": "{{body}}"
}
```

Some most used snippets are already attached beside the Tests tab in Postman to make it easy. A snippet of assertion to check the status code is shared below.

```javascript
pm.test("Successful POST request", function () {
  pm.expect(pm.response.code).to.be.oneOf([201, 202]);
});
```
Afterward, we are adding the below code to set variables in Postman to use later. This is just another Javascript code.

```javascript
const response = pm.response.json();
if (response && response.id) {
  let pid = response.id;
  pm.environment.set("postId", pid);
}
```
Now we can use this `postId` variable in another API request inside the header, body, URL, or query parameter.

Here the most interesting part comes, that is, how can we set the variables automatically? We can use Postman runner to do the job. But for this task, we will use the Newman tool. To do so, we will create a CSV file with the header of the variable names (e.g. userId, title, body). Now, we can run the below command to request the CSV file data.

```bash
newman run ./jsonplaceholder.postman_collection.json \
 -d ./sample_posts.csv \
 --timeout 300000 \
 --global-var json_placeholder=https://jsonplaceholder.typicode.com \
 --reporters=cli,htmlextra,csv
```
Also, we can request a specific folder of the collection with the --folder flag. Try to search for the --reporters flag and its usage.

A GitHub repo automate-api-testing-using-postman is made to review the document.

## Conclusion
Last but not the least, with Newman, we can get an HTML-like report view where we can easily get the request/response information or CSV report if the request volume is high. Finally, we can focus on test cases that are more necessary for developer speed.