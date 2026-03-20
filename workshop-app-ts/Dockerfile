FROM registry.redhat.io/ubi10/nodejs-24-minimal:10.1 AS builder
WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .
RUN npm run build

FROM registry.redhat.io/ubi10/nodejs-24-minimal:10.1
WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json

RUN apk --no-cache add curl

RUN mkdir /config && \
    echo 'some message' > /config/message.txt

ENV PORT=3000

EXPOSE 3000

CMD ["npm", "start"]
