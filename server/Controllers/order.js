import OrderModel from "../Models/Order.js";

export const createOrder = async (req, res) => {
    try {
        const order = new OrderModel(req.body)
        await order.save()

        res.status(200).json(order)
    }  catch (e) {
        res.status(404).json(e)
    }
}

export const updateOrder = async (req, res) => {
    try {
        const order = await OrderModel.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true})

        res.status(200).json(order)
    } catch (e) {
        res.status(404).json(e)
    }
}

export const deleteOrder = async (req, res) => {
    try {
        const order = await OrderModel.findByIdAndDelete(req.params.id)

        res.status(200).json(order)
    } catch (e) {
        res.status(404).json(e)
    }
}

export const getOrder = async (req, res) => {
    try {
        const order = await OrderModel.find({userId: req.params.userId})

        res.status(200).json(order)
    } catch (e) {
        res.status(404).json(e)
    }
}

export const getAllOrder = async (req, res) => {
    try {
        const order = await OrderModel.find()

        res.status(200).json(order)
    } catch (e) {
        res.status(404).json(e)
    }
}


export const statsOrder = async (req, res) => {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

    try {
        const income = await OrderModel.aggregate([
            { $match: { createdAt: { $gte: previousMonth } } },
            {
                $project: {
                    month: { $month: "$createdAt" },
                    sales: "$amount",
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: "$sales" },
                },
            },
        ]);
        res.status(200).json(income);
    } catch (err) {
        res.status(500).json(err);
    }
}