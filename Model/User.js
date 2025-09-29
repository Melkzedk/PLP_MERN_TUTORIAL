const { Schema } = require('mongoose');
const mongoose = require('../db');
const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true},
  email: { type: String, required: true, unique: true },
  role: { type: String, default: "user"},
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

model.exports = User;