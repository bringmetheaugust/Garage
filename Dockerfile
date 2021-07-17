FROM node:14.15.3-alpine3.10

ENV TELEGRAM_CHAT_ID=-279746682
ENV SERVER_PORT=80

WORKDIR /app
COPY . .

# server
RUN npm i --prefix ./server && \
    npm run build --prefix ./server

# client
RUN npm i --prefix ./client && \
    npm run build --prefix ./client

EXPOSE 80

CMD npm run prod --prefix ./server
