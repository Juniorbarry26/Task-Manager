const mongoose = require('mongoose');

const connectionString = ''

  
const connectDB = async (url) => {
  try {
    await mongoose.connect(url);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
}

module.exports = connectDB;