FROM node:10-alpine
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Now copy over source files
COPY . .

# Build webserv
RUN npm run build

# Running the app
CMD [ "npm", "start" ]