import mongoose from "mongoose";

const OrderModel = new mongoose.Schema({
    userId: {type: String, required: true},
    products: [
        {productId: String,
            quantity: {type: Number, default: 1}}
    ],
    amount: {type: Number, required: true},
    address: {type: Object, required: true},
    status: {type: String, default: 'pending'},


}, {timestamps: true})

export default mongoose.model('Order', OrderModel)