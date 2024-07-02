+++
author = "Md Abid Khan"
title = "Node Cluster Locking Challenge"
date = "2024-07-02"
description = "The interesting challenge initiated by Fringcore which doesn't include the participation"
tags = [
    "Node Js",
    "Cluster",
]
categories = [
    "Backend",
]
aliases = ["node-cluster-locking-challenge"]
+++
### Background
It's an interesting challenge to learn about the core concepts of NodeJS. I got this challenge from one of my colleague and engaged in the solution for about a couple of days. But I didn't solve it with the shared constraints.

**Challenge**: [Cluster locking](https://work-pool.notion.site/Cluster-Locking-80c4a20c07724903b422daa29f57623d)

### Playground

**Idea 1 concept**

The plan was to store the output in a common object to share data from worker to worker. But it didn't work as in Node Cluster is running in different process and no data can be shared worker to worker directly in Node Cluster. As a solution, It has to be sent to master node and the workers. However, the constraints have the limitation to update master node. So, it failed.

**Idea 2 concept**

Another concept is to emit the message using event and listen to another worker. But somehow it failed with an error due to large number of event emitted but didn't exit properly. I didn't dive into it.

**Idea 3 concept**

As the solution has a `send` method to send the request to another worker, I tried to use this. The concept is given below.

1. While initiation, an empty message is set using `cluster.worker.message` variable using `onStart` method.
2. When a request is received by a node, it checks whether the message is same as the requested word then it returns as it's been processed. Otherwise, the request will be sent to the other worker.
3. On the other worker, when it receives the request, it will check the message to do the execution, similar to 2.

[Challenges.mjs Gist](https://gist.github.com/abidkhan484/770bbed4b19f11143f062c3af13963ea)

The solution didn't work as the workers ran parallelly. So, when two requests are received by the two workers, and the `message` checking execution runs, it empties both of the worker and is executed by both of them.

It worked partially because the additional requests with same word were ignored. But the issue is only one worker has to do it. In my case, both of the workers are working for the same word once.

**Idea 4 concept**

I thought about to store the execution output in cache. But it is against the constraints and there is a need to set up cache server.

### Conclusion

The whole journey was full of excitement even if I didn't solve it as expected. But I would like to try again with any kind of clue or solution concept.
