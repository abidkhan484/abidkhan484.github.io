+++
author = "Md Abid Khan"
title = "Load Balancing Playground with Nginx and Docker"
date = "2022-03-13"
description = "Sample article showcasing basic Markdown syntax and formatting for HTML elements."
tags = [
    "Load Balancing",
    "Nginx",
    "Docker",
]
categories = [
    "Docker",
]
authors = ["Abid"]
aliases = ["load-balancing-playground-with-nginx-and-docker"]
favorite = true
+++
# Load Balancing Playground with Nginx and Docker

## Introduction:

Assuming you have already heard the term 'Load Balancing'. If not, then refer you to learn a very basic about the technique from this [load balancing wiki](https://en.wikipedia.org/wiki/Load_balancing_%28computing%29). The concept of the task is to make multiple App servers and a Load balancer to balance the traffic. In this write-up, I am sharing my experience to start learning load balancing.

## Background:

Different VMs can be created for the app servers and the load balancer in the virtual machine. Also, we have to install multiple services (like Nginx) in those VMs that are relatively time-consuming. Though the repetitive tasks can be done with some tool like Ansible or the different VMs can be created with Terraform. But to avoid that type of repetitive task or the technique mentioned above, we are using Docker to do the task.

## Prerequisites:

- Virtual Machine
- Docker
- Docker Compose

## Playground:

Initially, we have started with running multiple Docker containers to create a couple of app servers and a load balancer. The commands are given below.

```bash
# To create the app servers
docker run --name nginx_1 -d -p 9998:80 nginx
docker run --name nginx_2 -d -p 9997:80 nginx
docker run --name nginx_3 -d -p 9996:80 nginx

# To create a load balancer
docker run --name nginx_balancing -d -p 9999:80 nginx
```
Afterward, we have logged in to the different app servers and executed the below command to update the default HTML file.

```bash
# login to app server container
docker exec -it nginx_1 bash
echo '<h1>app 1</h1>' > /usr/share/nginx/html/index.html
# run similar command with different h1 tags 
# to the rest of the servers app 2 and app 3
# try it yourself
```
Then we have logged in to the load balancer container and updated the default conf with the below configuration according to the guided [nginx load balancer configuration](https://docs.nginx.com/nginx/admin-guide/load-balancer/http-load-balancer/). Here the IP (172.17.0.1) is the docker interface IP of the host machine.

```bash
# add this to outside the server block
upstream backend {
    server 172.17.0.1:9996;
    server 172.17.0.1:9997;
    server 172.17.0.1:9998;
}

# add this inside the server block
# also inside the “location /” block if exist
location / {
    # load balancer
    proxy_pass http://backend/;
}
```

Now we are ready to explore the output of the load balancing. Open the browser and browse to the below URL and check the output by reloading the page.

```bash
# load balancer URL
http://localhost:9999

# app server 1 URL
http://localhost:9998
```

The same thing I have done with the docker-compose shared in the [nginx-load-balancing-docker](https://github.com/abidkhan484/nginx-load-balancing-docker) Github repo. In this docker-compose file, I’ve just reset the networking technique in the docker-compose file and updated the Nginx default conf file accordingly. Refer to the trailing snippet to learn about it.

```bash
# Nginx default conf for the docker-compose file
upstream backend {
    server 10.10.0.2:80;
    server 10.10.0.3:80;
    server 10.10.0.4:80;
}

# the below changes are inside the server block of default conf
location / {
    # load balancer
    proxy_pass http://backend/;
}
```

## Conclusion:
For me, Docker is a nice tool to play new techniques without installing them on the host machine. Therefore, I always try to find a docker image to R&D any service that is available in the docker hub. And with following this, one can focus on learning the technique instead of setting the environment to decrease time consumption.
