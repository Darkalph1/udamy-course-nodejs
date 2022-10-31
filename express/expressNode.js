const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log("hi first middleware");
    next(); //it will allow us to jump to next middleware
});
app.use((req, res, next) => {
    console.log("hi second tesssstttss");
});

app.listen(8080);