# Use a Node.js base image with a specific version
FROM node:14

# Set the working directory within the container
WORKDIR /usr/src/portfolioSite2023

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Expose the port that your Express app will listen on
EXPOSE 3000

# Command to start your Express app
CMD ["node", "index.js"]