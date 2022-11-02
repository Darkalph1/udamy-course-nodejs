const express = require('express');

const productController = require('../controller/products');


const router = express.Router();


// it is reached '/admin/add-product => GET
router.get('/add-product', productController.getAddProduct);

// it is reached '/admin/add-product => POST
router.post('/add-product', productController.postAddproduct);

exports.router = router;


