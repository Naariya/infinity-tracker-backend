const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema({
  activityName: { type: String, minlength: [3, 'Activity name should contains at least 3 char'] },
  name: { type: String, minlength: [1, 'Name should contain at least 1 char'] },
  date: { type: Date },
  duration: { type: String, min: [0, 'Duration must be at least 1 minute'] },
  location: { type: String, minlength: [1, 'Location must contain at least 1 char'] },
  description: { type: String},
});

const RecordModel = mongoose.model('Record', recordSchema, 'records');

module.exports = RecordModel;
