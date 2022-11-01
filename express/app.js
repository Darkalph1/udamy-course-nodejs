const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

//const rootDir = require('./util/path');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRouters = require('./routes/shop');
const errorRouter = require('./routes/error404');

<<<<<<< HEAD
app.use(express.static(__dirname + '/public'));
=======
app.use(express.static(path.join(__dirname, 'public')));

>>>>>>> 124cb995b61954f42b30fbb7bcdb38b86b639f66

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin',adminData.router);  // by adding '/admin' here we can filter incoming paths. it will only accept paths were it have '/admin' in front
app.use(shopRouters);

app.use(errorRouter);


app.listen(8080);

