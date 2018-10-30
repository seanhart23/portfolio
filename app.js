var express = require("express");
var app = express();
var request = require("request");
var nodeMailer = require('nodemailer');
var bodyParser = require('body-parser');



app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));


//Routes go here

app.get("/", function(req, res){
    res.render('index');
});

var port = 3000;
    app.post('/send-email', function (req, res) {
      let transporter = nodeMailer.createTransport({
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,
          auth: {
              user: 'seanhart23@gmail.com',
              pass: 'omcmozfdzkhkyzif'
          }
      });
          var body = req.body.body;
          var name = req.body.name;
          var email = req.body.email;
          var subject = req.body.subject;
          
      let mailOptions = {
          from: name + '<seanhart23@gmail.com>', // sender address
          to: '<seanhart23@gmail.com>',
          subject: "Message from Sean Hart's Portfolio: " + subject,
          html: "<b>Name: </b>" + name + "<p><b>E-mail Address: </b>" + email + "<p><b>Message: </b>" + body
      };

      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
          console.log('Message %s sent: %s', info.messageId, info.response);
              res.render('index');
          });
      });
          app.listen(port, function(){
            console.log('Server is running at port: ',port);
          });


//Tell app to listen to port and IP
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("======================");
    console.log("The Server Has Started");
    console.log("======================");
});

