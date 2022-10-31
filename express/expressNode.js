const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log("hi first middleware");
    next(); //it will allow us to jump to next middleware
});
app.use((req, res, next) => {
    console.log("hi second tesssstttss");
    res.send("<h1>hello from expresssss!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</h1>");
});

app.listen(8080);