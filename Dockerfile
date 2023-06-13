FROM node:18
WORKDIR /app
COPY . .
RUN yarn
RUN yarn build
ENV PORT=8080
EXPOSE 8080
CMD ["yarn", "start"]
