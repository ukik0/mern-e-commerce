import UserModel from "../Models/User.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'

export const register = async (req, res) => {
    try {
        const {username, email} = req.body

        const isUsedEmail = await UserModel.findOne({email})

        if (isUsedEmail) {
            return res.status(404).json({message: 'Пользователь уже существует'})
        }

        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(req.body.password, salt)

        const user = new UserModel({
            email, password: hashedPassword, username,
        })
        await user.save()

        const  {password, ...userDoc} = user._doc
        const token = jwt.sign({id: user._id, isAdmin: user.isAdmin}, process.env.JWT_SECRET, {expiresIn: '3d'})

        res.status(200).json({...userDoc, token, message: 'Регистрация прошла успешно'})
    } catch (e) {
        res.status(500).json(e)
    }
}

export const login = async (req, res) => {
    try {

        const {username} = req.body

        const user = await UserModel.findOne({username})

        if (!user) {
            res.status(404).json({message: 'Пользователь не найден'})
        }

        const checkedPassword = bcrypt.compareSync(req.body.password, user._doc.password)

        if (!checkedPassword) {
            res.status(404).json({message: 'Пароли не совпадают'})
        }

        const { password, ...userDoc } = user._doc;
        const token = jwt.sign({id: user._id, isAdmin: user.isAdmin}, process.env.JWT_SECRET, {expiresIn: '3d'})

        res.status(200).json({...userDoc, token, message: 'Авторизация прошла успешно'})

    } catch (e) {
        res.status(500).json(e)
    }
}