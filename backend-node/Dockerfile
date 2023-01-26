FROM node:alpine AS build
WORKDIR /app
RUN npm install -g json-server
COPY db.json .
EXPOSE 3000
CMD [ "json-server","-H", "0.0.0.0","--watch", "db.json", "--port", "3000" ]