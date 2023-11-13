FROM node:18.16.0-alpine

# Add support for curl
RUN apk update && npm install -g npm@9.5.1

# Copying the files
COPY . /usr/src/app

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
RUN npm install

EXPOSE 8999

# start app
CMD ["npm", "start"]
