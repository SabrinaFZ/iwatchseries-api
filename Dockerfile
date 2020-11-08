FROM node:12-alpine

WORKDIR /iwatchseries-api

COPY ["package*.json", "/iwatchseries-api/"]

RUN npm install

COPY [".", "/iwatchseries-api/"]

EXPOSE 3000

CMD ["npm", "start"]

