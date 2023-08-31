# Use a Node.js base image with a specific version
FROM cimg/node:18.16.1

# Set the working directory within the container
WORKDIR /usr/src/portfolio_site_2023

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
USER root
RUN npm install
USER circleci

# Copy the rest of the application files to the container
COPY . .

# Expose the port that your Express app will listen on
EXPOSE 3000

# Command to start your Express app
CMD ["node", "index.js"]