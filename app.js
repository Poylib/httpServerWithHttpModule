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

let postId = 3;


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
  const lastUser = users[users.length - 1];
  if (lastUser) {
    users.push({
      id: ++lastUser.id,
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    })
  } else {
    users.push({
      id: 1,
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    })
  }
  res.status(201).json({ message: "userCreated" });
}

const postCreated = (req, res) => {
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
  ////////////////////////////////////////
  // console.log(posts.userId);
  //////////undifined////////////////////
  const { id, postingContent } = req.body;
  console.log(postingContent);
  console.log(req.body);
  const post = posts.find((post) => post.id === id);
  post.content = postingContent;
  const user = users.find((user) => post.userId === user.id);
  // console.log(posts);
  const newPost = {
      userID: post.id,
      userName: user.name,
      postingId: post.id,
      postingTitle: post.title,
      postingContent: post.content
  }
  // posts[0].postingContent = "노드"
  res.status(200).json({ data: newPost });
}

module.exports = { createUser,postCreated,getPostList,PatchPost };