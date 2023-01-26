# Build react app
FROM node:alpine AS build
WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm ci

COPY public/ public
COPY src/ src
COPY .env.production .
RUN npm run build

# Httpd Server
FROM httpd:2.4
WORKDIR /usr/local/apache2/htdocs/
COPY --from=build /app/build/ .