import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    myname:{
        type: String,
        required:true,
        min:4,
        max:20,
    },
    username:{
        type: String,
        required:true,
        index:true,
        lowercase:true,
        unique:true
    },
    email:{
        type: String,
        required:true,
        trim:true,
        lowercase:true,
        unique:true
    },
    password:{
        type: String,
        required:true,
        unique:true
    },
    phone:{
        type: String,
        required:true
    },


});

const user =mongoose.model('user',userSchema);
export default user;