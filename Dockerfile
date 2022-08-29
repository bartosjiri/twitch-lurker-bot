FROM node:lts-alpine
# Create app directory
WORKDIR /root/app
COPY package*.json ./
RUN npm ci
COPY . .
CMD [ "node", "lurker.js" ]
