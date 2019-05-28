import mongoose from 'mongoose';

const movieSchema = mongoose.Schema({
  Title: {type: String, required: true},
  Description: {type: String, required: true},
  Genre: {
    Name: String,
  },
  Director: {
    Name:String,
    Bio: String,
    DoB: Date,
    PoB: String,
  },
  Trailer: {type: String},
  Featured: {type: Boolean},
  ImagePath: {type: String}
},{timestamps: true});

module.exports = mongoose.model('Movie', movieSchema);