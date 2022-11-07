
const fs = require('fs');
const path = require('path');

const Cart = require('./cart');

const filePath = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');


// helper fucntion
const getProductsFromFile = cb => {
    fs.readFile(filePath, (err, fileContent) => {
            
        if (err) {
            return cb([]);
        }
        cb(JSON.parse(fileContent));
    });

}

// class handles data flow

module.exports = class Product {
    constructor(id, title, imageUrl, description, price){
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    save (){
    
        getProductsFromFile(products =>{
            if (this.id) {
                const existingProductIndex = products.findIndex(prod => prod.id === this.id);
                //console.log("index",existingProductIndex);
                const updatedProducts = [...products];
                //console.log("updated Prodcuts before",updatedProducts);
                updatedProducts[existingProductIndex] = this;
                //console.log("updated prodcuts after",updatedProducts);
                fs.writeFile(filePath, JSON.stringify(updatedProducts), (err) => {
                    console.log(err);
                });
            } else {

                this.id = Math.random().toString();
                products.push(this);
                fs.writeFile(filePath, JSON.stringify(products), (err) => {
                    console.log(err);
                });
            }

        });
        
    }

    static fetchAll(cb) {    //so i can call this method on the class not a dummy object
        
        getProductsFromFile(cb);
        
    }

    static findById (id, cb) {

        getProductsFromFile(products => {
            const product = products.find(p => p.id === id);
            cb(product);

        });

    }

    static editElementById (id, cb) {
        this.findById(id, product => {
            cb(product);
        });

    }

    static deleteElementById(id) {
        getProductsFromFile(products => {
            const product = products.find(prod => prod.id === id);
            const updatedProducts = products.filter(prod => prod.id !== id);
            fs.writeFile(filePath, JSON.stringify(updatedProducts), err => {
              if (!err) {
                 Cart.DeleteProduct(id, product.price);
              }
            });

        });       
    }


};