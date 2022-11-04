const ProductModel = require('../models/product');

///controller to product page where we can edit or addToCart products
exports.getProducts = (req, res, next) => {
    ProductModel.fetchAll(products => {
        res.render('shop/productList', {prods: products, pageTitle : 'All Products', path : '/products'}); 
    });
    
};

//controller to product details products/product-details button 
exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId;  //accessing dynamic params 
    //console.log(prodId);
    ProductModel.findById(prodId, singleProduct => {
        res.render('shop/Product-detail', { product : singleProduct, pageTitle: 'product Details', path : '/products' });
        
    });
    
}

// index router
exports.getIndex = (req, res, next) => {
    ProductModel.fetchAll(products => {
        res.render('shop/index', {prods: products, pageTitle : 'shop', path : '/'}); 
    });
};

//controller of cart page
exports.getCart = (req, res, next) => {
    res.render('shop/cart', { path : '/cart', pageTitle : 'Your cart'});
};

//controller of add to cart ----- post req
exports.postCart = (req, res, next) => {
    const productId = req.body.productId;
    console.log(productId);
    res.redirect('/cart');
}

//controller of order page
exports.getOrders = (req, res, next) => {
    res.render('shop/orders', { path : '/orders', pageTitle : 'your orders'});
};

//controller of checkout
exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', { path : '/checkout', pageTitle : 'Checkout'});
};

