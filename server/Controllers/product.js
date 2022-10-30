import ProductModel from "../Models/Product.js";

export const createProduct = async (req, res) => {
    try {
        const product = new ProductModel(req.body)
        await product.save()

        res.status(200).json(product)
    }  catch (e) {
        res.status(404).json(e)
    }
}

export const updateProduct = async (req, res) => {
    try {
        const product = await ProductModel.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true})

        res.status(200).json(product)
    } catch (e) {
        res.status(404).json(e)
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const product = await ProductModel.findByIdAndDelete(req.params.id)

        res.status(200).json(product)
    } catch (e) {
        res.status(404).json(e)
    }
}

export const getProduct = async (req, res) => {
    try {
        const product = await ProductModel.findById(req.params.id)

        res.status(200).json(product)
    } catch (e) {
        res.status(404).json(e)
    }
}

export const getAllProduct = async (req, res) => {
    try {
        let product;
        const queryNew = req.query.new
        const queryCategory = req.query.category

        if (queryNew) {
            product = await ProductModel.find().sort({createdAt: -1}).limit(5)
        } else if (queryCategory) {
            product = await ProductModel.find({categories: {$in: [queryCategory]}})
        } else {
            product = await ProductModel.find()
        }


        res.status(200).json(product)
    } catch (e) {
        res.status(404).json(e)
    }
}
