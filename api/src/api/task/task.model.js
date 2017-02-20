'use strict';

const mongoose = require('mongoose');


let TaskSchema = new mongoose.Schema({
  name: String,
  completed: {
  	type: Boolean,
  	default: false
  },
  created: {
  	type: Date,
  	default: Date.now
  }
});

module.exports = mongoose.model('Task', TaskSchema);
