const fs = require('fs');
const path = require('path');

const filepath = path.join(path.dirname(process.mainModule.filename), 'data', 'cart.json');


module.exports = class Cart {
    //adding product to a cart
    static addProduct(id, productPrice) {
        //Fetch the previous cart
        fs.readFile(filepath, (err, filecontent) => {
            let cart = {products: [], totalPrice: 0};
            

            if(!err){
                cart = JSON.parse(filecontent);
            }
            // Analyze the cart => Find existing product
            let existingProudctIndex = cart.products.findIndex(prod => prod.id === id);
            let existingProudct = cart.products[existingProudctIndex];
            let updatedProduct;

            //Add new product / increase the quantity

            if(existingProudct){
                updatedProduct = {...existingProudct};
                updatedProduct.qty += 1;
                cart.products = [...cart.products];
                cart.products[existingProudctIndex] = updatedProduct;
            } else {
                updatedProduct = { id: id, qty: 1};
                cart.products = [...cart.products, updatedProduct];
            }
            cart.totalPrice =cart.totalPrice + +productPrice;
            fs.writeFile(filepath, JSON.stringify(cart), (err) => {
                console.log(err);
            })
        });
        
    }
    //delete product form a cart
    static DeleteProduct(id, productPrice) {
        fs.readFile(filepath, (err, filecontent) => {
            if(err) {
                return;
            }
            const updatedCart = { ...JSON.parse(filecontent) };
            const product = updatedCart.products.find(prod => prod.id === id);

            if(!product){
                return;
            }
            const productQty = product.qty;

            updatedCart.products = updatedCart.products.filter(prod => prod.id !== id);
            updatedCart.totalPrice = updatedCart.totalPrice - productPrice * productQty;
            fs.writeFile(filepath, JSON.stringify(updatedCart), err => {
                console.log(err);
            })

        });
                
    }

    // for getting full cart
    static getCart (cb) {
        
        fs.readFile(filepath, (err, filecontent)=>{
            if(err) {
                cb(null);
            } else {

                cb(JSON.parse(filecontent));
            }
        });

    }
}