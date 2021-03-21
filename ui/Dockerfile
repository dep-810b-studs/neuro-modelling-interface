FROM node:10.16.3-alpine AS BUILD
WORKDIR /src
COPY ./package.json ./package-lock.json ./
RUN npm ci
COPY . .
ENV NODE_ENV=development
RUN npm run prod
EXPOSE 3000
ENTRYPOINT ["node", "./server/index.js"]
