FROM alpine:3.8

RUN apk update

RUN apk add --update nodejs nodejs-npm

RUN adduser -D reactwebserver

#USER reactwebserver

WORKDIR /usr/app/src

ENTRYPOINT npm start