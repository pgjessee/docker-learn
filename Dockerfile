FROM node:20.9-bullseye-slim as builder

WORKDIR /app

COPY package.json .

RUN npm install && npm cache clean --force

COPY . .

RUN npm run build

WORKDIR /

FROM nginx:1.25.3-alpine-slim

COPY --from=builder /app/build /usr/share/nginx/html




