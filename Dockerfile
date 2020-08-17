FROM node:12-alpine

COPY . /usr/src/app
WORKDIR /usr/src/app

RUN npm install --only=prod

EXPOSE 8080
CMD ["node", "server.js"]