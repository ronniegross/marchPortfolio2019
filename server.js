var express = require('express'),
    path = require('path'),
    nodeMailer = require('nodemailer');


// require ENV
// call process.env for password and email

app.set('view engine', 'ejs');
app.use(express.static('public'));

var app = express();
var port = 3000;
app.listen(port, function (req, res) {
    console.log('Server is running at port: ', port);
});








// const express = require('express')
// const app = express()
// const nodemailer = require('nodemailer')
// const routes = require('./routes/index.js')


// transporter
// app.post('/send', function (req, res, next) {
//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: 'test-email@gmail.com',
//             pass: 'test123'
//         }
//     })
// }


app.post('/send', function (req, res, next) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'test-email@gmail.com',
            pass: 'test123'
        }
    })

    const mailOptions = {
        from: `${req.body.email}`,
        to: 'test-email@gmail.com',
        subject: `${req.body.name}`,
        text: `${req.body.message}`,
        replyTo: `${req.body.email}`
    }

}

transporter.sendMail(mailOptions, function(err, res) {
    if (err) {
      console.error('there was an error: ', err);
    } else {
      console.log('here is the res: ', res)
    }
  })
})

  // import from an ignored file?