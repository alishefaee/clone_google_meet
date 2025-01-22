#!/bin/bash

# Build client
cd .. && npm run build

# Return to server directory
cd server

# Build server
npm run build

# Start with PM2
pm2 start ecosystem.config.js