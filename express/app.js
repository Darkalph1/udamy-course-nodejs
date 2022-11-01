const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

//const rootDir = require('./util/path');

const app = express();

const adminRouters = require('./routes/admin');
const shopRouters = require('./routes/shop');
const errorRouter = require('./routes/error404');

app.use(express.static(path.join(__dirname, 'public')));


app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin',adminRouters);  // by adding '/admin' here we can filter incoming paths. it will only accept paths were it have '/admin' in front
app.use(shopRouters);

app.use(errorRouter);


app.listen(8080);

//full on express modules in this branch

