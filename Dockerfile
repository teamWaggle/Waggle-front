FROM  node:19-alpine AS builder

WORKDIR /usr/src/app

COPY . .

RUN yarn install
RUN yarn build:design-system
RUN yarn build:waggle-service

FROM node:19-alpine AS Release

WORKDIR /app

COPY --from=builder /usr/src/app/packages/waggle-service/dist /app/packages/waggle-service/dist
# COPY --from=builder /usr/src/app/packages/waggle-service/package.json /app/packages/waggle-service/package.json
# COPY --from=builder /usr/src/app/.pnp.cjs /app/.pnp.cjs
# COPY --from=builder /usr/src/app/.yarnrc.yml /app/.yarnrc.yml
# COPY --from=builder /usr/src/app/.yarn /app/.yarn
# COPY --from=builder /usr/src/app/package.json /app/package.json
# COPY --from=builder /usr/src/app/yarn.lock /app/yarn.lock

FROM nginx:latest

RUN rm /etc/nginx/conf.d/default.conf

COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

RUN rm -rf ./usr/share/nginx/html/*

COPY --from=Release /app/packages/waggle-service/dist ./usr/share/nginx/html/

EXPOSE 3001
ENTRYPOINT ["nginx", "-g", "daemon off;"]
