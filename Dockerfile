FROM node:20.11.0-alpine as base

WORKDIR /usr/src/app

COPY ./dist .

USER node

EXPOSE 3000

CMD npx serve
