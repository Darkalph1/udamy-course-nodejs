const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

const products = require('./admin');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('shop', {prods: products.products, docTitle : 'shop', path : '/'});
});

module.exports = router;