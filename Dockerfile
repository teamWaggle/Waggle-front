# FROM  node:18-alpine AS builder



# RUN npm install yarn --global --force

# RUN yarn install --immutable --immutable-cache --check-cache

# COPY . ./
# RUN yarn build:waggle-service

# FROM builder AS release



# FROM  node:19.6.0-alpine

# WORKDIR /app

# COPY . .

# RUN yarn install
# COPY package* yarn.lock .pnp*     ./
# COPY .yarnrc.yml                  ./
# COPY .yarn                        ./.yarn

# RUN yarn install --immutable --immutable-cache --check-cache

# RUN yarn build:waggle-service

# COPY --from=builder dist /packages/waggle-service/dist
# COPY --from=builder .pnp.cjs /packages/waggle-service/.pnp.cjs
# COPY --from=builder .yarnrc.yml /packages/waggle-service/.yarnrc.yml
# COPY --from=builder .pnp.loader.mjs /packages/waggle-service/.pnp.loader.mjs

# COPY --from=builder .yarn/cache /packages/waggle-service/.yarn/cache
# COPY --from=builder .yarn/releases /packages/waggle-service/.yarn/releases
# # COPY --from=builder .yarn/plugins /packages/waggle-service/.yarn/plugins
# COPY --from=builder .yarn/sdks /packages/waggle-service/.yarn/sdks

# # COPY --from=builder /usr/src/app/packages/waggle-service/dist /app/dist
# # COPY --from=builder /usr/src/app/.pnp.cjs /app/.pnp.cjs
# # COPY --from=builder /usr/src/app/.yarnrc.yml /app/.yarnrc.yml
# # COPY --from=builder /usr/src/app/.yarn /app/.yarn
# # COPY --from=builder /usr/src/app/package.json /app/package.json
# # COPY --from=builder /usr/src/app/yarn.lock /app/yarn.lock

FROM  node:19-alpine AS builder

WORKDIR /usr/src/app

COPY . .

RUN yarn install
RUN yarn build:waggle-service

FROM node:19-alpine



WORKDIR /app


COPY --from=builder /usr/src/app/packages/waggle-service/dist /app/packages/waggle-service/dist
COPY --from=builder /usr/src/app/packages/waggle-service/package.json /app/packages/waggle-service/package.json
COPY --from=builder /usr/src/app/.pnp.cjs /app/.pnp.cjs
COPY --from=builder /usr/src/app/.yarnrc.yml /app/.yarnrc.yml
COPY --from=builder /usr/src/app/.yarn /app/.yarn
COPY --from=builder /usr/src/app/package.json /app/package.json
COPY --from=builder /usr/src/app/yarn.lock /app/yarn.lock
RUN yarn install

CMD ["yarn", "preview:waggle-service"]
EXPOSE 3001





# FROM  node:19-alpine AS builder

# WORKDIR /usr/src/app

# COPY . .

# RUN yarn install
# # RUN yarn dev:waggle-service

# CMD ["yarn", "dev:waggle-service"]
# EXPOSE 5173
