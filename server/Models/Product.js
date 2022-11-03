import mongoose from "mongoose";

const ProductModel = new mongoose.Schema({
    title: {type: String, required: true, unique: true},
    desc: {type: String, required: true},
    img: {type: String, required: true},
    categories: Array,
    size: Array,
    color: Array,
    price: {type: Number, required: true},
    inStock: {type: Boolean, default: true}
}, {timestamps: true})

export default mongoose.model('Product', ProductModel)