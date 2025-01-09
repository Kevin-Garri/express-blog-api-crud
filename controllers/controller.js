const posts = require('../Data/posts')
//index
const index = (req, res) => {
  let listaPost = posts;
  if (req.query.title) {
    listaPost = posts.filter(post => post.title === req.query.title)
  }
  res.json(listaPost)
}

//show
const show = (req, res) => {
  const post = post.find(post.id == req.params.id)

  if (!post) {
    res.status(404)
    return res.json({
      message: 'post inesistente, prova altro',
      status: 404,
      error: 'not found'
    })
  }
  res.json(post)
}

//store
const store = (req, res) => {
  const id = posts.at(-1).id + 1;

  const newPost = {
    id,
    ...req.body
  }

  posts.push(newPost)

  res.status(201)
  req.json(posts)
}

//update
const update = (req, res) => {
  const id = req.params.id
  const post = posts.find(post => post.id == id);

  if (!post) {
    res.status(404)
    return res.json({
      message: 'post inesistente, prova un altro dolce',
      staut: 404,
      error: 'not found'
    })
  };

  for (let key in req.body) {
    post[key] = req.body[body]
  }
  res.json(post)
}

//modify
const modify = (req, res) => {
  const id = req.params.id
  const post = posts.find(post => post.id == id);

  if (!post) {
    res.status(404)
    return res.json({
      message: 'post inesistente, prova un altro dolce',
      staut: 404,
      error: 'not found'
    })
  };

  for (let key in req.body) {
    post[key] = req.body[body]
  }
  res.json(post)
}

//destroy
const destroy = (req, res) => {
  const post = post.find(post => post.id == req.params.id)
  if (!post) {
    res.status(404)
    return res.json({
      message: 'post inesistente, prova altro',
      status: 404,
      error: 'not found'
    })
  }
  post.splice(post.indexOf(post), 1)
  res.status(204)
}

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy
}