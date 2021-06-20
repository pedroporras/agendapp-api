FROM node


COPY ["package.json", "package-lock.json", "/home/node/app/"]

WORKDIR '/home/node/app'

RUN npm install --production

COPY ["." , "."]

RUN npm install --development

CMD ["npm", "start"]