const express = require('express');
const postRouter = require('./router/router');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('i miei post');
})

app.use('/posts', postRouter);

app.listen(port, () => {
  console.log('sono in ascolto sulla porta 3000');
})
