FROM node:alpine

WORKDIR /frontend

COPY ./yarn.lock ./
COPY ./package.json ./

COPY . .

CMD ["yarn", "serve"]
