const mongoose = require('mongoose');
const { Schema } = mongoose;

const surveySchema = new Schema({
  title: String,
  body: String,
  recipients: String,
  _user: String,
  dateSent: Date,
});

mongoose.model('surveys', surveySchema);
