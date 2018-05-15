const mongoose = require('mongoose');
const { Schema } = mongoose;

const performPostSchema = new Schema({
  title: String,
  body: String,
  imageURL: String,
  videoURL: String,
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  createAt: Date,

});

mongoose.model('performposts', performPostSchema);
