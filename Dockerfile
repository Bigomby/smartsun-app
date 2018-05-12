FROM node:slim

COPY . /app/

WORKDIR /app/

RUN apt-get update; apt-get install -y git

RUN npm install; npm install -g quasar-cli

ENTRYPOINT ["npm" , "start"]
