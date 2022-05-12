FROM node:13.12.0-alpine
WORKDIR /app
COPY src ./src
COPY public ./public
COPY node_modules ./node_modules
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
COPY tsconfig.json ./
RUN npm install
COPY . ./
CMD ["npm", "start"]