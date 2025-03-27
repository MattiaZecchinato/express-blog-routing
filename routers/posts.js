const express = require('express');
const router = express.Router();

const posts = require('../posts.js');

// index
router.get('/', (req, res) => {

    console.log('index');
    // res.send('Posts list');
    res.json(posts);
});

// show
router.get('/:id', (req, res) => {

    const param = req.params.id;
    console.log(`show ${param}`);
    // res.send(`Details of post ${req.params.id}`);
    const foundPost = posts.find(elem => elem.slug === param);

    res.json(foundPost);
});

// store 
router.post('/', (req, res) => {

    console.log('store');
    res.send('Create new post');
});

// update 
router.put('/:id', (req, res) => {

    console.log(`update ${req.params.id}`);
    res.send(`Full post edit of ${req.params.id}`);
}); 

// modify 
router.patch('/:id', (req, res) => {

    console.log(`modify ${req.params.id}`);
    res.send(`Partial post edit of ${req.params.id}`);
}); 

// delete 
router.delete('/:id', (req, res) => {

    console.log(`delete ${req.params.id}`);
    res.send(`Deleting post ${req.params.id}`);
});

module.exports = router;