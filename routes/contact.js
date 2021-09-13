var express = require('express'),
    router = express.Router(),
    nodemailer = require('nodemailer');

/*** Mailer ***/
router.post('/', (req, res) => {
    const smtpTrans = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'absideoninteractive@gmail.com',
            pass: 'ltadsmzscafllzpf'
        }
    })
    const mailOpts = {
        from: 'absideoninteractive@gmail.com',
        to: 'hello@absideoninteractive.com',
        subject: 'New quote request from your website',
        html: `Name: ${req.body.name} <br>
               Email: ${req.body.email} <br>
               Type of site: ${req.body.type} <br>
               Budget: ${req.body.budget} <br>
               Additional Detail: ${req.body.detail} <br>`
    }

    smtpTrans.sendMail(mailOpts, (error, response) => {
        if (error) {
            res.redirect('/')
        }
        else {
            res.redirect('/')
        }
    })
})

module.exports = router;
