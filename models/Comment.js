const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
  user_id: { type:mongoose.Schema.Types.ObjectId, ref:'User'},
  movie_id:{ type: mongoose.Schema.Types.ObjectId, ref:'Movie'},
  rating: { type: Number, required: true},
  comment_body: {
    type: String,
    required: true,
  }
},{timestamps: true});

module.exports = mongoose.model('Comment',commentSchema);