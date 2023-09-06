#!/bin/bash

ssh root@45.79.109.251 'bash -s' <<EOF
docker pull mjohnst/portfolio2023:latest
docker run -d --name portfolio -p 3000:3000 mjohnst/portfolio2023:latest
EOF