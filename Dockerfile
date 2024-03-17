# Use the official Node.js image as the base image
FROM node:alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the container
COPY . .

# Expose the port that your NestJS app will run on
EXPOSE 3030

# Start the NestJS application
CMD ["npm", "run", "dev"]