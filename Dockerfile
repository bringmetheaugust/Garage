#TODO доделать двуслойный контейнер с node-alpine:14.15.3

FROM nginx:1.14

ENV TELEGRAM_CHAT_ID=-XXXXXXXXXX

COPY ./nginx/nginx.conf /etc/nginx/
COPY ./nginx/garage.conf /etc/nginx/conf.d/

WORKDIR /app

COPY ./server .

RUN apt-get update && \
    apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_14.x | bash - && \
    apt-get install -y nodejs && \
    npm install -g yarn

EXPOSE 80

CMD service nginx start && yarn --cwd /app/server prod
