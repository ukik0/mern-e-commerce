import mongoose from "mongoose";

const ProductModel = new mongoose.Schema({
    title: {type: String, required: true, unique: true},
    desc: {type: String, required: true},
    img: {type: String, required: true},
    categories: Array,
    size: String,
    color: String,
    price: {type: Number, required: true}
}, {timestamps: true})

export default mongoose.model('Product', ProductModel)