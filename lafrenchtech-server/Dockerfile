FROM mhart/alpine-node:8
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . ./
EXPOSE 4000
CMD [ "npm", "start"]