From node:lts-alpine

COPY ./ /app
WORKDIR /app
RUN npm install

EXPOSE 3000
EXPOSE 9229

ENTRYPOINT ["npm"]
CMD ["run", "debugstart"]
