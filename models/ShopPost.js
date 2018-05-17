const mongoose = require('mongoose');
const { Schema } = mongoose;

const shopPostSchema = new Schema({
  title: String,
  body: String,
  imageURL: String,
  price: Number,
  _seller: { type: Schema.Types.ObjectId, ref: 'User' },
  _buyer: { type: Schema.Types.ObjectId, ref: 'User' },
  createAt: Date,
});

mongoose.model('shopposts', shopPostSchema);
