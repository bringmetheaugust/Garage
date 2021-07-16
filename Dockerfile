FROM nginx:1.14

ENV TELEGRAM_CHAT_ID = -279746682
ENV SERVER_PORT = 81

# Nginx
COPY ./nginx/nginx.conf /etc/nginx/
COPY ./nginx/garage.conf /etc/nginx/conf.d/

WORKDIR /app
COPY . .

RUN apt-get update && \
    apt-get install -y curl && curl -fsSL https://deb.nodesource.com/setup_14.x | bash - && \
    apt-get install -y nodejs

# client
RUN npm run build --prefix ./client
RUN mv ./client/dist /var/www

EXPOSE 80

CMD service nginx start && npm run prod --prefix ./server/
