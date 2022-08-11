const http = require('http');
const express = require('express');
const { createUser,createPost,getPostList,PatchPost,deletePost } = require('./app');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ message: "/pong" });
});

app.post('/signup', createUser);  // 미션1
app.post('/postman', createPost);  // 미션2
app.get('/posts', getPostList); //미션 3
app.patch('/postman', PatchPost) //미션 4
app.delete('/postman',deletePost) //미션 5

const server = http.createServer(app);
server.listen(8000, () => {
  console.log('server is running on PORT 8000');
})