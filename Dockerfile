FROM node:10

WORKDIR /usr/src/Doge

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 8080

RUN npm run produce

CMD ["npm", "run", "server"]