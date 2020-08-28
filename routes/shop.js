const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res, next) => {
  // __dirname is a global variabel that detects the OS and builds an absolute path
  // the path module allows us to concatenate the values to build a correct path irregardless fo the OS
  // we can concatonate directory navigation as well
  res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});

module.exports = router;
