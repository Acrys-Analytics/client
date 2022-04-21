FROM node:16-alpine as builder

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
RUN yarn install

COPY . .
RUN yarn run build \
  && yarn install --production


FROM node:16-alpine

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json .
COPY --from=builder /app/yarn.lock .

EXPOSE 3000
CMD ["node", "dist/index.js"]
