const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

//const rootDir = require('./util/path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRouters = require('./routes/shop');
const errorRouter = require('./routes/error404');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({extended: false}));


//routers for admin /routes/admin.js
app.use('/admin',adminData.router);  // by adding '/admin' here we can filter incoming paths. it will only accept paths were it have '/admin' in front

//routers for shop /routes/shop.js
app.use(shopRouters);

//routes for error page
app.use(errorRouter);


app.listen(8080);

