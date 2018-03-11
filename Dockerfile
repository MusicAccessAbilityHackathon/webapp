FROM mhart/alpine-node:9

WORKDIR /usr/src/app

COPY index.html .
COPY package.json .

RUN npm install
COPY . .

CMD ["npm", "run", "dev"]
