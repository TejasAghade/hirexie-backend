const mongoose = require('mongoose');
const mongodb = require('mongodb')
const binary = mongodb.Binary;

// const companySchema = new mongoose.Schema
const documentSchema = new mongoose.Schema({
  uId: {
    type: String,
    required: true
  },
  
  userId: {
    type: String,
    required: true
  },

  type: {
    type: String,
    required: true
  },

  file: {
    type: String,
    required: false
  }
});
// const Document = mongoose.model('documents', documentSchema);
const Document = mongoose.model('documents', documentSchema);

module.exports = Document;
