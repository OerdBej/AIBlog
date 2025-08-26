import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // Use once to prevent multiple log entries
    mongoose.connection.once('connected', () => {
      console.log('MongoDB connected successfully.');
    });

    // Handle disconnected event
    mongoose.connection.on('disconnected', () => {
      console.log('MongoDB disconnected.');
    });

    await mongoose.connect(`${process.env.MONGODB_URI}/quickblog`);
    return mongoose.connection.readyState;
  } catch (error) {
    console.error('MongoDB connection error:', {
      message: error.message,
      stack: error.stack,
      code: error.code,
    });
    return null;
  }
};

export default connectDB;
