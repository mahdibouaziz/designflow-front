#FROM node:lts
#FROM node:lts-alpine3.13
FROM node:12.7-alpine

WORKDIR /app

COPY package*.json ./
#COPY yarn.lock ./

#RUN yarn
RUN --mount=type=cache,mode=0777,id=nodeCache,target=/node_modules npm install --build-from-resource
#RUN --mount=type=cache,mode=0777,id=nodeCache,target=/node_modules yarn

COPY . .

#RUN yarn run build
RUN npm run build --prod

EXPOSE 3000
CMD ["npm", "run", "start"]

