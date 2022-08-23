FROM node:16
# Create app directory
WORKDIR /root/app
COPY package*.json ./
RUN npm ci
COPY . .
CMD [ "node", "lurker.js" ]
