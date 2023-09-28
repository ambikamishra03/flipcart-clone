import mongoose from 'mongoose'
import dotenv from 'dotenv';

dotenv.config();
const URL = process.env.URL;

export const Connection = async () =>{


    try {
        await mongoose.connect(URL, { useUnifiedTopology:true,useNewUrlParser: true });
        console.log("succesfully connected");
    } catch (error) {
        console.log("error while connecting to database",error.message);
    }
}
export default Connection;