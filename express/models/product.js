const products = [];

module.exports = class Product {
    constructor(title){
        this.title = title;
    }

    save (){

        // products.push({title : this.title});
        products.push(this);

    }

    static fetchAll() {    //so i can call this method on the class not a dummy object
        return products;
    }
}