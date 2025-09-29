const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

// Check database connection
async function connectDB() {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB connected");
}

module.exports = { connectDB, mongoose };