const mongoose = require('mongoose');
const { Schema } = mongoose;

const surveySchema = new Schema({
  title: String,
  body: String,
  recipients: String,
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  dateSent: Date,
});

mongoose.model('surveys', surveySchema);
