
const fs = require('fs');
const path = require('path');

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
    constructor(title, imageUrl, description, price){
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    save (){

        getProductsFromFile(products =>{
            this.id = Math.random().toString();
            products.push(this);
            fs.writeFile(filePath, JSON.stringify(products), (err) => {
                console.log(err);
            });

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


};