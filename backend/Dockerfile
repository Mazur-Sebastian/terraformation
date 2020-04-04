FROM node:alpine

WORKDIR /backend

COPY package.json yarn.lock ./

COPY . .

CMD sh -c 'yarn start:dev'
