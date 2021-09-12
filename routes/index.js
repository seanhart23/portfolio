var methodOverride = require('method-override'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    express = require('express'),
    request = require("express"),
    request = require('request'),
    router = express.Router(),
    app = express();

router.get('/', function (req, res) {
    res.render("home");
})

module.exports = router;