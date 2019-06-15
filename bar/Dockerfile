# start with a small image
FROM node:10.15-alpine

# setup working directory
RUN mkdir -p /usr/app
WORKDIR /usr/app

# copy over files
COPY . .

# install dependencies
RUN npm install --production

# open up the port for node to listen on
EXPOSE 3000

# start the service
CMD npm run start
