const express = require('express');

const shopController = require('../controller/shop');

//route partitioning
const router = express.Router(); 

//route to index page
router.get('/', shopController.getIndex);


//rotue to products page
router.get('/products', shopController.getProducts);

//route to product details products/product-details button 
router.get('/products/:productId', shopController.getProduct);  //to get a specific product details

//route to cart
router.get('/cart', shopController.getCart);

//route to add to cart  post req
router.post('/cart', shopController.postCart);

//route to delete form cart
router.post('/cart-delete-item', shopController.postCartDeleteProduct);

//rotue to orders
router.get('/orders', shopController.getOrders);

//rotue to checkout
router.get('/checkout', shopController.getCheckout);


//route export 
module.exports = router;