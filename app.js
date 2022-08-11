const users = [
  {
    id: 1,
    name: "Rebekah Johnson",
    email: "Glover12345@gmail.com",
    password: "123qwe",
  },
  {
    id: 2,
    name: "Fabian Predovic",
    email: "Connell29@gmail.com",
    password: "password",
  },
];
let newUserId = users.length + 1;

const posts = [
  {
    id: 1,
    title: "간단한 HTTP API 개발 시작!",
    content: "Node.js에 내장되어 있는 http 모듈을 사용해서 HTTP server를 구현.",
    userId: 1,
  },
  {
    id: 2,
    title: "HTTP의 특성",
    content: "Request/Response와 Stateless!!",
    userId: 1,
  },
];

let postId = posts.length+1;

const getPostList = (req, res) => {
  let newPosts = posts.map((post) => {
    const user = users.find((user) => post.userId === user.id)
    return {
      userID: post.id,
      userName: user.name,
      postingId: post.id,
      postingTitle: post.title,
      postingContent: post.content
    }
  })
  res.json({ data: newPosts })
}

const createUser = (req, res) => {
  const userData = req.body.data;
  users.push({
    id: newUserId++,
    name: userData.name,
    email: userData.email,
    password: userData.password,
  })
  res.status(201).json({ message: "userCreated" });
}

const createPost = (req, res) => {
  console.log(req.body)
  posts.push({
    id: postId++,
    title: req.body.title,
    content: req.body.content,
    userId: req.body.userId,
  })
  console.log("after: ", posts);
  res.status(201).json({message:"postCreated"})
}

const PatchPost = (req, res) => {
  const { id, postingContent } = req.body;
  const post = posts.find((post) => post.id === id);
  post.content = postingContent;
  const user = users.find((user) => post.userId === user.id);
  const newPost = {
      userID: post.id,
      userName: user.name,
      postingId: post.id,
      postingTitle: post.title,
      postingContent: post.content
  }
  res.status(200).json({ data: newPost });
}

const deletePost = (req, res) => {
  const { id, userId } = req.body
  const postCheck = posts.find(v => v.id === id && v.userId === userId);
  const postIndex = posts.indexOf(postCheck);
  if (postCheck) {
    posts.splice(postIndex, 1);
    posts.forEach(v => v.id--);
    console.log(posts)
    res.status(200).json({ message: "postingDeleted" });
  } else {
    res.status(403).json({ message: "delete failed" });
  }
}



module.exports = { createUser,createPost,getPostList,PatchPost,deletePost };