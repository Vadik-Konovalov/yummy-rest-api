const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      // required: [true, 'Set name for user'],
    },
    password: {
      type: String,
      trim: true,
      // required: [true, 'Set password for user'],
    },
    email: {
      type: String,
      trim: true,
      // required: [true, 'Email is required'],
      unique: true,
    },
    avatarURL: {
      type: String,
      // required: [true, 'avatarURL is required'],
    },
    subscription: {
      type: Boolean,
      default: false,
    },
    token: {
      type: String,
      default: null,
    },
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      // required: [true, 'Verify token is required'],
    },
  },
  { versionKey: false, timestamps: true }
);

// userSchema.pre('save', async function() {
//   if(this.isNew){
//     this.password = await bcrypt.hash(this.password, 10)
//   }
// })

const User = mongoose.model('User', userSchema);

module.exports = {
  User,
};
