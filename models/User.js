import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = mongoose.Schema({
  Username:{
    type: String,
    required: true, 
    lowercase: true, 
    index:{unique: true}, 
    trim: true
  },
  Email: {type: String, index:{unique: true}, trim: true},
  Password: {type: String, trim: true, required: true},
  FavoriteMovies: [{type: mongoose.Schema.Types.ObjectId, ref:'Movie'}]
 
},{timestamps: true});

userSchema.statics.hashPassword = function(password) {
  return bcrypt.hashSync(password, 10);
}

userSchema.methods.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.Password)
}

module.exports = mongoose.model('User', userSchema);