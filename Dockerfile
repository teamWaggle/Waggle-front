FROM  node:19-alpine AS builder

WORKDIR /usr/src/app

COPY . .

RUN yarn install
RUN yarn build:design-system
RUN yarn build:waggle-service

FROM node:19-alpine AS Release

WORKDIR /app

COPY --from=builder /usr/src/app/packages/waggle-service/dist /app/packages/waggle-service/dist

FROM nginx:latest

RUN rm /etc/nginx/conf.d/default.conf

COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

RUN rm -rf ./usr/share/nginx/html/*

COPY --from=Release /app/packages/waggle-service/dist ./usr/share/nginx/html/

EXPOSE 80
EXPOSE 443

ENTRYPOINT ["nginx", "-g", "daemon off;"]
