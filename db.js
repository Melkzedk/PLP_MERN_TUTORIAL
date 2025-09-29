const mongoose = require('mongoose');
import mongoose from 'mongoose';
import dotenv from 'dotenv';


//check database connection
async function connectDB() {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB connected");
}

module.exports = (connectDB, mongoose);