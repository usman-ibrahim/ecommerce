import mongoose from 'mongoose';

export const connectToDB = () => {
//   mongoose.set('strictQuery', true);

  if(mongoose.connection.readyState >= 1) {
    console.log('MongoDB is already connected');
    return;
  }

  try {
    mongoose.connect(process.env.MONGODB_URI)

  } catch (error) {
    console.log(error);
  }
}