FROM registry.redhat.io/ubi9/nodejs-24:9.7 AS builder
WORKDIR /opt/app-root
USER 0
COPY package.json package-lock.json ./

RUN npm install

COPY . .
RUN npm run build

FROM registry.redhat.io/ubi9/nodejs-24:9.7
WORKDIR /opt/app-root

COPY --from=builder /opt/app-root/node_modules ./node_modules
COPY --from=builder /opt/app-root/.next ./.next
COPY --from=builder /opt/app-root/package.json ./package.json
USER 0
RUN mkdir /config && \
    echo 'some message' > /config/message.txt && \
    chown -R 1001:0 /config
USER 1001

ENV PORT=3000

EXPOSE 3000

CMD ["npm", "start"]
