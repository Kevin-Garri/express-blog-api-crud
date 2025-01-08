const express = require('express');
const postRouter = require('./router/router');
const app = express();
const port = 3000;
const bodyParser = require('body-parser')
app.use(bodyParser.json())

let posts = [];

app.post('/store', (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
    content: req.body.content,
    images: req.body.images
  };
  posts.push(newPost);
  console.log('Nuovo post aggiunto', newPost);

  res.status(201).send(newPost);
})

app.get('/', (req, res) => {
  res.send('i miei post');
})

app.use('/posts', postRouter);

app.listen(port, () => {
  console.log('sono in ascolto sulla porta 3000');
})

