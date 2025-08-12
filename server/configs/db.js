import mongoose from "mongoose";

const connectDb = async () => {
  try {
    mongoose.connection.on("connected", () =>
      console.log("database is connected")
    );
    await mongoose.connect(`${process.env.MONGODM_URI}/quickblog`);
  } catch (error) {
    console.log(error.message);
  }
};

export default connectDb;
