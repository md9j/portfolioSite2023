#!/bin/bash

ssh root@45.79.109.251 'bash -s'
docker pull mjohnst/portfolio2023:latest
docker stop portfolio
docker rm portfolio
docker run -d -p 443:3000 --name portfolio mjohnst/portfolio2023:latest
