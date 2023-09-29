FROM node:14

WORKDIR /home/server
COPY . /home/server
ENV PORT=""
RUN npm i
EXPOSE 3000

CMD [ "node", "index.js" ]