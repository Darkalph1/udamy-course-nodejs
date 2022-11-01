const express = require('express');
const router = express.Router();

const path = require('path');

router.use((req, res, next) =>{
    res.status(404);
    //res.send("<h1>page not found!!</h1>");
    res.sendFile(path.join(__dirname, '../', 'views', 'error.html')); //to get path of the html file
});

module.exports = router;