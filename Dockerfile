# Web server
FROM nginx:1.14

COPY ./nginx/garage_dev.conf /etc/nginx/conf.d/
COPY ./nginx/nginx.conf /etc/nginx/

EXPOSE 80

# server
FROM node:14.15.3-alpine3.10

ENV TELEGRAM_CHAT_ID=-279746682

WORKDIR /app

CMD yarn --cwd /app/server dev
