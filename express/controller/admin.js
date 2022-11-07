const ProductModel = require('../models/product');


//controller to add-product page
exports.getAddProduct = (req, res, next) => {
    res.status(200);
    res.render('admin/edit-product', 
    { 
        pageTitle : 'Add product', 
        path : '/admin/add-product',
        editing : false
    });
};

//controller of add-product page post requset
exports.postAddproduct = (req, res, next) => {
    
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    const price = req.body.price;

    const product = new ProductModel(null, title, imageUrl, description, price);
    product.save();
    res.redirect('/');
};

//controller edit product for admin => GET
exports.getEditProduct = (req, res, next) => {
    const editMode = req.query.edit;

    if (!editMode) {
        return res.redirect('/');
    }
    const prodId = req.params.productId;
    ProductModel.findById(prodId, product => {

        if(!product) {
            return res.redirect('/');
        }

        res.render('admin/edit-product', {
            pageTitle : 'Edit product', 
            path: '/admin/edit-product',
            product : product,
            editing: editMode
        });
    });
};

//controller for edit product for admin => POST req
exports.postEditProduct = (req, res, next) => {
    const prodId = req.body.prodcutId;
    const updatedTitle = req.body.title;
    const updatedImageUrl = req.body.imageUrl;
    const updatedPrice = req.body.price;
    const updatedDescription = req.body.description;
    //console.log("product id at postEditProduct",prodId);

    const updatedProducts = new ProductModel(prodId, updatedTitle, updatedImageUrl, updatedDescription, updatedPrice);
    updatedProducts.save();
    res.redirect('/admin/products');
};


// router for admin-products list where we can edit products
exports.getAdminProudctsList = (req, res, next) => {
    ProductModel.fetchAll(products => {
        res.render('admin/productListAdmin', { prods: products, pageTitle : 'Admin prouducts', path : '/admin/products'}); 
    });

};

//controller for admin delete button
exports.postDeleteProduct = (req, res, next) => {
    const prodId = req.body.productId;
    ProductModel.deleteElementById(prodId);
    res.redirect('/admin/products');
}