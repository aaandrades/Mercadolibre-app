FROM node:14
  
# Add package file
COPY package*.json ./

# Install deps
RUN npm i

# Copy source
COPY src ./src
COPY tsconfig.json ./tsconfig.json

# Build dist
RUN npm run build

# Expose port 3001
EXPOSE 3001

CMD npm run start