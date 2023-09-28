import mongoose from 'mongoose'

const dressSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true,
        unique:true
    },
    url:String,
    detailUrl:String,
    title:Object,
    price:Object,
    quantity:Number,
    description:String,
    discount:String,
    tagline:String
});

const Dress =mongoose.model('dresses',dressSchema);

export default Dress;