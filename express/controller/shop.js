const ProductModel = require('../models/product');


exports.getProducts = (req, res, next) => {
    ProductModel.fetchAll(products => {
        res.render('shop/productList', {prods: products, pageTitle : 'All Products', path : '/products'}); 
    });
    
};

// index router
exports.getIndex = (req, res, next) => {
    ProductModel.fetchAll(products => {
        res.render('shop/index', {prods: products, pageTitle : 'shop', path : '/'}); 
    });
};

exports.getCart = (req, res, next) => {
    res.render('shop/cart', { path : '/cart', pageTitle : 'Your cart'});
};

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', { path : '/checkout', pageTitle : 'Checkout'});
}

