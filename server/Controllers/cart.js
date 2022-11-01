import CartModel from "../Models/Cart.js";

export const createCart = async (req, res) => {
    try {
        const cart = new CartModel(req.body)
        await cart.save()

        res.status(200).json(cart)
    }  catch (e) {
        res.status(404).json(e)
    }
}

export const updateCart = async (req, res) => {
    try {
        const cart = await CartModel.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true})

        res.status(200).json(cart)
    } catch (e) {
        res.status(404).json(e)
    }
}

export const deleteCart = async (req, res) => {
    try {
        const cart = await CartModel.findByIdAndDelete(req.params.id)

        res.status(200).json(cart)
    } catch (e) {
        res.status(404).json(e)
    }
}

export const getCart = async (req, res) => {
    try {
        const cart = await CartModel.findOne({userId: req.params.userId})

        res.status(200).json(cart)
    } catch (e) {
        res.status(404).json(e)
    }
}

export const getAllCart = async (req, res) => {
    try {
        const cart = await CartModel.find()

        res.status(200).json(cart)
    } catch (e) {
        res.status(404).json(e)
    }
}
