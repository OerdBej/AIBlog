import mongoose from 'mongoose';

const connectDb = async () => {
  mongoose.connection.once('connected', () => {
    console.log('Database is connected');
  });

  mongoose.connection.on('error', (err) => {
    console.error('Database connection error:', err);
  });

  mongoose.connection.on('disconnected', () => {
    console.log('Database disconnected');
  });

  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/quickblog`);
    return true;
  } catch (error) {
    console.error('Failed to connect to database:', error);
    throw error;
  }
};

export default connectDb;
