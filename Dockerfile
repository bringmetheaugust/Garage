FROM nginx:1.14

# nginx configurations are added by docker volumes

ENV TELEGRAM_CHAT_ID=-279746682

WORKDIR /app

RUN apt-get update && \
    apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_14.x | bash - && \
    apt-get install -y nodejs && \
    npm install -g yarn

EXPOSE 80

CMD service nginx start & yarn --cwd /app/server dev & yarn --cwd /app/client dev
