import UserModel from "../Models/User.js";

export const updateUser = async (req, res) => {
    try {
        const user = await UserModel.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true})

        res.status(200).json(user)
    } catch (e) {
        res.status(404).json(e)
    }
}

export const deleteUser = async (req, res) => {
    try {
        const user = await UserModel.findByIdAndDelete(req.params.id)

        res.status(200).json(user)
    } catch (e) {
        res.status(404).json(e)
    }
}

export const getUser = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id)

        res.status(200).json(user)
    } catch (e) {
        res.status(404).json(e)
    }
}

export const getAllUsers = async (req, res) => {
    try {
        const query = req.query.new
        const user = query ? await UserModel.find().sort({_id: -1}).limit(5) : await UserModel.find()

        res.status(200).json(user)
    } catch (e) {
        res.status(404).json(e)
    }
}
export const getUserStats = async (req, res) => {
    try {
        const date = new Date()
        const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

        const data = await UserModel.aggregate([
            {$match: {createdAt: {$gte: lastYear}}},
            {
                $project: {
                    month: { $month: "$createdAt" },
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: 1 },
                },
            },
        ])
        res.status(200).json(data)

    } catch (e) {
        res.status(404).json(e)
    }
}