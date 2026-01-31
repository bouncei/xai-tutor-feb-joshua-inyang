# Use official Node.js LTS as base (for building)
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build the Next.js app
RUN npm run build

# Prune to production dependencies
RUN npm prune --production

# Production stage
FROM node:20-alpine AS runner

# Set working directory
WORKDIR /app

# Copy from builder (including pruned node_modules and build artifacts)
COPY --from=builder /app ./


# Expose port
EXPOSE 3000

# Run the app
CMD ["npm", "start"]
