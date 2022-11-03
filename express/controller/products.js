const ProductModel = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.status(200);
    res.render('add-product', { pageTitle : 'Add product', path : '/admin/add-product'});
};

exports.postAddproduct = (req, res, next) => {
    const product = new ProductModel(req.body.title);
    product.save();
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    ProductModel.fetchAll(products => {
        res.render('shop', {prods: products, pageTitle : 'shop', path : '/'}); 
    });
    
};