const express = require('express');
const router = express.Router();


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Show Me The JSON'});
});

//our github webhook receiver
router.post("/webhooks/github", function (req, res) {
    global.io.emit('messages', JSON.stringify(req.body));
    res.json(req.body);
});
module.exports = router;