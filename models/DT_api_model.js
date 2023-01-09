const { Date } = require('mongoose');
const mongoose = require('mongoose');


const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const apiSchema = new Schema({


  state: {
    type: String,
    default: "ok"
  }
  
});

const api = mongoose.model('api', apiSchema,'api');

module.exports = api;
