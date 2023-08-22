FROM node:16

WORKDIR /usr/src/app

COPY . .

RUN yarn install  

RUN yarn run build

CMD ["yarn","dev"]