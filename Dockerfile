# select baseimage
FROM node:18.17.1-alpine 

# copy localproject files into container, create portfolio folder if needed
COPY . /portfolio/

# set working directory, "cd" into portfolio folder
WORKDIR /portfolio

# install dependencies
RUN npm install

# last command to run, execute container startup
CMD ["node", "index.js"] 