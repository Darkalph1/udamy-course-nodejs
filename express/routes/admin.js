const express = require('express');


const router = express.Router();


// it is reached '/admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    res.status(200);
    res.send("<form action='/product' method='post'><input type='text' name='title'> <button type='submit'>submit</button></form>");
});

// it is reached '/admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;

