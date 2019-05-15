From node:lts-alpine

COPY ./ /app
WORKDIR /app
RUN npm install

EXPOSE 3000
VOLUME ["/app"]

ENTRYPOINT ["npm"]
CMD ["run", "devstart"]
