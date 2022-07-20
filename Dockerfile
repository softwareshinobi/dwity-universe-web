###
### Software Shinobi Cloud Server Controller (Web)
###

FROM nginx:latest

MAINTAINER Software Shinobi "troy@softwareshinobi.com”

USER root

RUN rm -frv /usr/share/nginx/html/*

RUN ls /usr/share/nginx/html/

COPY . /usr/share/nginx/html/

RUN find /usr/share/nginx/html/
