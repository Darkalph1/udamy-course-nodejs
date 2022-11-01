const express = require('express');
const path = require('path');


const router = express.Router();


// it is reached '/admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    res.status(200);
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html')); //to get path of the html file
});

// it is reached '/admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;

