const express = require('express');

const adminController = require('../controller/admin');

const router = express.Router();


// it is reached '/admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

//it is reached /admin/products => GET
router.get('/products', adminController.getAdminProudctsList);

// it is reached '/admin/add-product => POST
router.post('/add-product', adminController.postAddproduct);



exports.router = router;


