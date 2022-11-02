// const products = [];
const fs =require('fs');
const path = require('path');

const filePath = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');


module.exports = class Product {
    constructor(title){
        this.title = title;
    }

    save (){
        fs.readFile(filePath, (err, fileContent) => {
            let products = [];
            if (!err){
                products = JSON.parse(fileContent);
            }
            products.push(this);
            fs.writeFile(filePath, JSON.stringify(products), (err) => {
                console.log(err);
            })
        });

        
        // products.push(this);

    }

    static fetchAll(cb) {    //so i can call this method on the class not a dummy object
        

        
        fs.readFile(filePath, (err, fileContent) => {
            
            if (err) {
                return cb([]);
            }
            cb(JSON.parse(fileContent));
        });
        //return products;
    }
}