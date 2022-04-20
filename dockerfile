FROM node:16.13.0-alpine

COPY . .

WORKDIR /

EXPOSE 3333 9229

CMD yarn && yarn migrate && yarn start:debug
