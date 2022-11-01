const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRouters = require('./routes/admin');
const shopRouters = require('./routes/shop');
const errorRouter = require('./routes/error404');


app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin',adminRouters);  // by adding '/admin' here we can filter incoming paths. it will only accept paths were it have '/admin' in front
app.use(shopRouters);

app.use(errorRouter);


app.listen(8080);
