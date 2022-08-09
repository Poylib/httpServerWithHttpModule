const http = require('http');
const express = require('express');
const { createUser,postCreated } = require('./app');
const app = express();
app.use(express.json());

app.post('/signup', createUser);
app.post('/postman', postCreated);

const server = http.createServer(app);
server.listen(8000, () => {
  console.log('server is running on PORT 8000');
})