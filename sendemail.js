var nodemailer = require('nodemailer')
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'hanenjnoub@gmail.com',
      pass: ''
    }
  });
  
  var mailOptions = {
    from: 'hanenjnoub@gmail.com',
    to: 'karimmarwani04@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });