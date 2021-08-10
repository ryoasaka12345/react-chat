# Reference

https://vitamindev.com/react/chat-with-socket-io/

# Branches
- step 1: demonstration socketio
- step 2: create chat room
- step 3: create database for chat log 

# preparation

## server

### step1
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
### step2
none

### step3
Install mysql
```
npm install mysql
```

## client
### step1

```
npx create-react-app client
```

### step2
```
npm i react-router-dom
```

### step3
