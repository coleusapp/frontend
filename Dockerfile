ARG PORT=3000

# Dockerfile
FROM node:14.15.0-alpine3.12
LABEL maintainer="Amirmasoud Sheydaei <amirmasoud.sheydaei@gmail.com>"

# create destination directory
RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

# update and install dependency
RUN apk update && apk upgrade
RUN apk add git

# copy the app, note .dockerignore
COPY . /usr/src/nuxt-app/
RUN yarn install
RUN yarn run build

EXPOSE $PORT

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=$PORT
ENV BACKEND_URL=$HEROKU_BACKEND_URL
ENV GQL_URL=$HEROKU_GQL_URL

CMD [ "yarn", "start" ]
