import {products, dresses} from './constants/data.js'
import Product from './model/product_schema.js';
import Dress from './model/dresses-schema.js'

const  DefaultData = async () =>{
try {
    await Product.insertMany(products);
    await Dress.insertMany(dresses);
    console.log("data successfully imported");
} catch (error) {
    console.log("error while inserting defaultdata",error.message);
}
}

export default DefaultData;