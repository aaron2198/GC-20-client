FROM node AS base
WORKDIR /app
COPY package.json package.json
RUN npm install

FROM base AS dev
RUN apt-get update
RUN apt-get install -y nano
ENTRYPOINT npm start
