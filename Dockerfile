# Use an official Node.js runtime as a base image
FROM node:23.4-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the Nuxt 3 app
RUN npm run build

# Expose the default port Nuxt listens on
EXPOSE 3000

# Start the Nuxt server
CMD ["npm", "run", "serve"]
