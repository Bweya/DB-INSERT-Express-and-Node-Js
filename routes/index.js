var express = require('express');
var router = express.Router();

let f = require('../controllers/thisform');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('insertform', { title: 'Insert Database' });

  router.post('/', f.insert_post);

});

module.exports = router;
