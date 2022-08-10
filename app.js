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
		userID           : 1,
	  userName         : "Rebekah Johnson",
    postingId        : 1,
    postingTitle     : "간단한 HTTP API 개발 시작!",
		postingContent   : "Node.js에 내장되어 있는 http 모듈을 사용해서 HTTP server를 구현."
	},
	{  
		userID           : 2,
	  userName         : "Fabian Predovic",
    postingId        : 2,
    postingTitle     : "HTTP의 특성",
		postingContent   : "Request/Response와 Stateless!!"
	},
	{  
		userID           : 3,
	  userName         : "new user 1",
    postingId        : 3,
    postingImageUrl  : "내용 1",
		postingContent   : "sampleContent3"
	},
	{  
		userID           : 4,
	  userName         : "new user 2",
    postingId        : 4,
    postingImageUrl  : "내용 2",
		postingContent   : "sampleContent4"
	}
];

const createUser = (req, res) => {
  const user = req.body.data ;
  users.push({
    id: user.id,
    name: user.name,
    email: user.email,
    password: user.password
  })

  console.log("after: ", users);

  res.json({ message: "userCreated" });
}

const postCreated = (req, res) => {
  const post = req.body.data;
  posts.push({
    id: 3,
    title: post.title,
    content: post.content,
    userId: post.userId,
  })
  console.log("after: ", posts);

  res.json({message:"postCreated"})
}

const getPostList = (req, res) => {
  console.log(res)
  res.json({ data: posts })
}

module.exports = { createUser,postCreated,getPostList };