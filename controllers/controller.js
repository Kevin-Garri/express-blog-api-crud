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
      message: "post inesistente, prova altro",
      status: 404,
      error: "kg not found"
    })
  }
  res.json(post)
}

//destroy
const destroy = (req, res) => {
  const post = post.find(post => post.id == req.params.id)
  if (!post) {
    res.status(404)
    return res.json({
      message: "post inesistente, prova altro",
      status: 404,
      error: "kg not found"
    })
  }
  post.splice(post.indexOf(post), 1)
  res.status(204)
}


module.exports = {
  index,
  show,
  destroy
}