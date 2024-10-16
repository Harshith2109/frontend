# Step 1: Build the React application
FROM node:18-alpine as builder

WORKDIR /frontend

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the React app
RUN npm run build

# Step 2: Serve the application using Caddy
FROM caddy:2.7.4-alpine

# Copy the built files from the builder stage
COPY --from=builder /frontend/build /usr/share/caddy

# Optional: Copy Caddyfile for custom configuration
# COPY Caddyfile /etc/caddy/Caddyfile

# Expose port 80
EXPOSE 80

# By default, Caddy will serve from /usr/share/caddy

