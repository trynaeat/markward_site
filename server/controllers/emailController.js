var nodemailer = require('nodemailer'),
    config = require('../config/config.js');

var exports = module.exports = {};

var contactEmail = config.email.recepient;
var directConfig = {
  name: 'teamglenn.org',
  direct: true
};
var smtpConfig = {
  service: 'gmail',
  auth: {
    user: 'nodemailer10',
    pass: 'teamglenn'
  }
};
var transport = nodemailer.createTransport(smtpConfig);

exports.send = function(req, res) {
  console.log(req.body);
  var email = req.body;
  if(email.name && email.subject && email.body) {
    var emailConfig = {
      from: email.name,
      to: contactEmail,
      subject: email.subject,
      text: email.body
    }
    transport.sendMail(emailConfig, function(err, info) {
      if(err) {
        console.log(err);
        res.status(500).send({error: 'Could not send!'});
      } else {
        res.status(200).send({message: 'Success!'});
      }
    });
  } else {
    res.status(500).send({error: 'Missing required fields! Did not send.'});
  }
}
