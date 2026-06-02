# ==========================================
# PRODUCTION DOCKER ENVIRONMENT FOR WHATSAPP
# ==========================================
FROM node:18-slim

# Install system dependencies for Puppeteer & Chromium
RUN apt-get update && apt-get install -y \
    chromium \
    libnss3 \
    libatk-bridge2.0-0 \
    libgtk-3-0 \
    libxss1 \
    libasound2 \
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /usr/src/app

# Copy application manifests
COPY package*.json ./

# Install production dependencies only
RUN npm ci --only=production

# Copy source code
COPY . .

# Environment variables for Chromium performance optimization
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium

# Start the application
CMD ["npm", "start"]
