const express = require('express');
const app = express();

const port = 3000;

const postsRouter = require('./routers/posts.js');

app.use(express.static('public'));

app.get('/', (req, res) => {

    console.log('base test');
    res.send('base test');
})

app.use("/posts", postsRouter);

app.listen(port, () => {

    console.log('listen');
})