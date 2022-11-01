const express = require('express');
const router = express.Router();

router.use((req, res, next) =>{
    res.status(404);
    res.send("<h1>page not found!!</h1>");
});

module.exports = router;