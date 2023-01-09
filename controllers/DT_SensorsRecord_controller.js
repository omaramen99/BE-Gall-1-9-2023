
const SensorsRecord = require('../models/DT_SensorsRecord_model');
const Device = require('../models/DT_Device_model');
const Sensor = require('../models/DT_Sensor_model');
const api = require('../models/DT_api_model');

const Task = require('../models/Task_model');
const Department = require('../models/Department_model');
const { Mongoose } = require('mongoose');
const  mongoose  = require('mongoose');
var nodemailer = require('nodemailer');
const client = require('twilio')("AC56989b9f9211e8461907458c8d91e242", "28640b8fec0082af583a175b11a90697");
//contain all business logic
module.exports = {
  SendMailTo(req, res, next)
  {
  console.log(req.body);
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'thegallium.fm@gmail.com',
        pass: 'hajxizxoqfulmghm'
      }
    });
    
    var mailOptions = {
      from: 'thegallium.fm@gmail.com',
      to: `${req.body.to}`,
      subject: `${req.body.subject}`,
     // text: `${req.body.text}`,
     // html: (req.body.html) ? req.body.html : ""
     html : req.body.html
    };
    //console.log(req.body.html);
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
        res.status(200).send(error);
      } else {
        res.status(201).send('Email sent: ' + info.response);
        //console.log('Email sent: ' + info.response);
      }
    });

  },
  SendSMSTo(req,res,next)
  {
    client.messages
    .create({body: req.query.msg, from: '+14094033137', to: '+'+req.query.to})
    .then(message => {
      res.status(201).send(message.sid);
    
    }).catch(
      next
    );
  },
};
