var methodOverride = require('method-override'),
    bodyParser     = require('body-parser'),
    mongoose       = require('mongoose'),
    express        = require('express'),
    request        = require("express"),
    request        = require('request'),
    router         = express.Router(),
    app            = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.use(require("express-session")({
    secret: 'This is my develper portfolio',
    resave: false,
    saveUninitialized: false
}));

app.use(function (req, res, next) {
    res.locals.currentUser = req.user;
    next();
});

/** ROUTES */
var indexRoutes = require('./routes/index.js');
var contactRoutes = require('./routes/contact.js');

/** REQUIRING ROUTE FILES USING EXPRESS ROUTER */
app.use('/', indexRoutes);
app.use('/contact', contactRoutes);

/** TELL APP TO LISTEN TO PORT AND IP */
app.listen(process.env.PORT || 3000, process.env.IP, function () {
    console.log("================================");
    console.log("The server has started!");
    console.log("================================");
});