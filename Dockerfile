FROM nginx:1.14

ENV TELEGRAM_CHAT_ID=-279746682

WORKDIR /app

COPY ./nginx/garage_dev.conf /etc/nginx/conf.d/
COPY ./nginx/nginx.conf /etc/nginx/
COPY ./docker_entrypoint.sh /

RUN apt-get update && \
    apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_14.x | bash - && \
    apt-get install -y nodejs && \
    npm install -g yarn && \
    chmod 777 /docker_entrypoint.sh

EXPOSE 80

# CMD yarn --cwd /app/server dev
