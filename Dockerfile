##
## dwity universe web / front end
##

FROM nginx:latest

WORKDIR /usr/share/nginx/html/

MAINTAINER Software Shinobi "the.software.shinobi@gmail.com"

USER root

#RUN rm -frv /usr/share/nginx/html/*

##RUN ls /usr/share/nginx/html/

COPY . .

## COPY . /usr/share/nginx/html/

##RUN find /usr/share/nginx/html/

## RUN find
