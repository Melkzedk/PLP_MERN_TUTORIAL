const { Schema } = require('mongoose');
const mongoose = require('../db');
const { Schema } = mongoose;

const taskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  status: { type: String, enum: ['pending', 'in-progress', 'completed'], default: 'pending' },
  owner: {type: String}
}, { timestamps: true });