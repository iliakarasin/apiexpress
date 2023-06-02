FROM node:18
WORKDIR /app
COPY package*.json ./
RUN runyarn
COPY . .
ENV PORT=8080
EXPOSE 8080
CMD ["yarn", "start"]
