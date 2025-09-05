FROM node:20-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

COPY . .

EXPOSE 3000

# Run the compiled JS file (usually in /dist)
CMD [ "npm", "run", "dev" ]
