#!/bin/bash

ssh root@45.79.109.251 'bash -s'
docker pull $DOCKER_REGISTRY/$DOCKER_IMAGE_PORTFOLIO:latest
docker stop $DOCKER_CONTAINER_PORTFOLIO
docker rm $DOCKER_CONTAINER_PORTFOLIO
docker run -d -p 443:3000 --name $DOCKER_CONTAINER_PORTFOLIO $DOCKER_REGISTRY/$DOCKER_IMAGE_PORTFOLIO:latest
