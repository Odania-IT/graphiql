FROM node:lts
MAINTAINER Mike Petersen <mike@odania-it.de>

WORKDIR /srv
RUN npm install -g yarn

COPY . /srv
RUN yarn install

EXPOSE 8000

CMD ["node", "/srv/index.js"]

