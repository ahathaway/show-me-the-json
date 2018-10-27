const express = require('express');
const router = express.Router();
const childProcess = require('child_process');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Show Me The JSON'});
});

module.exports = router;