FROM nginx:1.19-alpine
MAINTAINER Shayne Thiessen <shayne@shaynethiessen.com>

ADD packages/web/build/ /usr/share/nginx/html

COPY docker/web/default.conf /etc/nginx/conf.d/default.conf
