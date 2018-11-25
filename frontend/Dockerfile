FROM node:8-alpine
WORKDIR /src

# Install dependencies
COPY package.json /src/package.json
RUN npm install

# Now copy over source files
COPY . /src

# Build webserv
RUN npm run build

# Run the built webserv
ENTRYPOINT npm run start