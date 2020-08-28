const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path');

router.get('/', (req, res, next) => {
  // __dirname is a global variabel that detects the OS and builds an absolute path
  // the path module allows us to concatenate the values to build a correct path irregardless fo the OS
  // we can concatonate directory navigation as well
  // here we created the rootDir helper utility to get the root directory for us automatically
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;
