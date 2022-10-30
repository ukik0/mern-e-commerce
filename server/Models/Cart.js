import mongoose from "mongoose";

const CartModel = new mongoose.Schema({
    userId: {type: String, required: true},
    products: [
        {productId: String,
        quantity: {type: Number, default: 1}}
    ],

}, {timestamps: true})

export default mongoose.model('Cart', CartModel)