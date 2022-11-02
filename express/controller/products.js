const ProductModelClass = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.status(200);
    res.render('add-product', { pageTitle : 'Add product', path : '/admin/add-product'});
};

exports.postAddproduct = (req, res, next) => {
    const product = new ProductModelClass(req.body.title);
    product.save();
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    const products = ProductModelClass.fetchAll();
    console.log(products);
    res.render('shop', {prods: products, pageTitle : 'shop', path : '/'});
};