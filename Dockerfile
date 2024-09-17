# Use the official Nginx image from the Docker Hub
FROM nginx:alpine

# Copy the contents of the public directory to the default Nginx directory
COPY public /usr/share/nginx/html

# Expose port 80 to allow traffic to the Nginx server
EXPOSE 80

# Start Nginx and keep it running
CMD ["nginx", "-g", "daemon off;"]