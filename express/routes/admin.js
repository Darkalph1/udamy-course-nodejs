const express = require('express');
const path = require('path');
const rootDir = require('../util/path');


const router = express.Router();
const products = [];

// it is reached '/admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    res.status(200);
    //res.sendFile(path.join(rootDir, 'views', 'add-product.html')); //to get path of the html file
    res.render('add-product.pug', {docTitle : 'add Product', path : '/admin/add-product' });
});

// it is reached '/admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    products.push({title: req.body.title});
    res.redirect('/');
});

exports.router = router;
exports.products = products;

