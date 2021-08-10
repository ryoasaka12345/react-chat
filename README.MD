# Branches

- step 1: demonstration socketio
- step 2: create chat room
- step 3: create database for chat log

# preparation

## server

Input following command

```
mkdir server
cd server
npm init
npm install --save socket.io express
```

Make `index.js` as

```
const http = require("http");
const express = require("express");
const cors = require("cors");
const coketIo = require("socket.io");

var server = http.createServer();

const app = express();
app.use(cors());

const PORT = 4000;

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
```

Add following code to package.json

```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js"
}
```

Make sure that the server is working properly by

```
npm start
```

Nodemon is useful for development.

```
npm i -D nodemon
```

package.json

```
"sucripts": "nodemon inde.js
```

To start

```
npm run dev
```

## client

```
npx create-react-app client
```

```
npm i react-router-dom
```

# Reference

- environment
  https://www.tuyano.com/index3?id=1126003

- websocket
  https://vitamindev.com/react/chat-with-socket-io/
  https://strapi.io/blog/how-to-build-a-real-time-chat-forum-using-strapi-socket-io-react-and-mongo-db
  https://tsh.io/blog/socket-io-tutorial-real-time-communication/

- mysql
  https://www.w3schools.com/nodejs/nodejs_mysql_create_db.asp
