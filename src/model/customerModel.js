const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: String,
  contact_info: String,
  status: String
});

module.exports = mongoose.model('Customer', customerSchema);
