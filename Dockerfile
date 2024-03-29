FROM node:12-alpine AS BUILD_IMAGE

WORKDIR /usr/src/app

COPY package*.json ./

# install dependencies
RUN yarn --frozen-lockfile

COPY . .

# remove development dependencies
RUN npm prune --production

FROM node:12-alpine

WORKDIR /usr/src/app

# copy from build image
COPY --from=BUILD_IMAGE /usr/src/app/node_modules ./node_modules
COPY . .

CMD [ "node", "index.js" ]