# Build the React application using Node 19
FROM node:19 AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project
COPY . .

# Build the React app for production
RUN npm run build

# SERVE the React app using Nginx
FROM nginx:alpine

# Copy the build files from the previous step into Nginx's default directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80, which Nginx will serve the app on
EXPOSE 80

# Start Nginx in the foreground to serve the app
CMD ["nginx", "-g", "daemon off;"]
