const express = require('express');
const router = express.Router();

const posts = require('../posts.js');

// index
router.get('/', (req, res) => {

    console.log('index');
    res.json(posts);
});

// show
router.get('/:id', (req, res) => {

    console.log('show');
    res.send(`Details of post ${req.params.id}`);
});

// store 
router.post('/', (req, res) => {

    console.log('store');
    res.send('Create new post');
});

// update 
router.put('/:id', (req, res) => {

    console.log('update');
    res.send(`Full post edit of ${req.params.id}`);
}); 

// modify 
router.patch('/:id', (req, res) => {

    console.log('modify');
    res.send(`Partial post edit of ${req.params.id}`);
}); 

// delete 
router.delete('/:id', (req, res) => {

    console.log('delete');
    res.send(`Deleting post ${req.params.id}`);
});

module.exports = router;