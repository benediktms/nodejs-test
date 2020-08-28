// External packages
const express = require('express');
const bodyParser = require('body-parser');

// node modules
const path = require('path');

// Local files
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

console.log('starting server on localhost:3000');
app.listen(3000);
