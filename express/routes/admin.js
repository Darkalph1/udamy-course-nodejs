const express = require('express');

const adminController = require('../controller/admin');

const router = express.Router();


// route to  '/admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

//route to Admin Products /admin/products => GET
router.get('/products', adminController.getAdminProudctsList);

// add product to post req route '/admin/add-product => POST
router.post('/add-product', adminController.postAddproduct);

//edit product route '/admin/edit-product' => GET 
router.get('/edit-product/:productId', adminController.getEditProduct);

//edit post product
router.post('/edit-product', adminController.postEditProduct);

//delete product route
router.post('/delete-product', adminController.postDeleteProduct);

//export
exports.router = router;


