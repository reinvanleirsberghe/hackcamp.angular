FROM node:alpine

WORKDIR /app
COPY ./package.json .
COPY ./yarn.lock .
COPY ./.babelrc ./.babelrc
COPY ./src ./src

RUN yarn
RUN yarn build:server
RUN yarn build:mocks

EXPOSE 5000

CMD yarn start
