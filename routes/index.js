const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Show Me The JSON',
        desc: 'Show Me The JSON is an always available tool, for helping you decipher what that api call is doing. Just point whichever system at your custom, single-session-use URL below, and the results of the request will be displayed in this browser window just below the URL.',
        cdesc: 'Things are a little dusty around here. Check back later.'
    });
});

router.get('/robots.txt', function (req, res) {
    res.type('text/plain');
    res.send("User-agent: *\nDisallow: /users\nDisallow: /webhooks\nDisallow: /javascripts\nDisallow: /stylesheets");
});

module.exports = router;