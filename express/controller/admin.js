const ProductModel = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.status(200);
    res.render('admin/add-product', { pageTitle : 'Add product', path : '/admin/add-product'});
};

exports.postAddproduct = (req, res, next) => {
    
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    const price = req.body.price;

    const product = new ProductModel(title, imageUrl, description, price);
    product.save();
    res.redirect('/');
};

// router for admin products list
exports.getAdminProudctsList = (req, res, next) => {
    ProductModel.fetchAll(products => {
        res.render('admin/productListAdmin', { prods: products, pageTitle : 'Admin prouducts', path : '/admin/products'}); 
    });

};