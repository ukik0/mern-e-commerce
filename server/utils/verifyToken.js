import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    try {
        const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');

        if (token) {
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            req.user = decoded

            next()
        }
    } catch (e) {
        console.log(e)
        res.status(404).json({message: 'Ошибка получния пользователя'})
    }
}

export const verifyTokenAuth = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next()
        } else {
            res.status(403).json('Error verifyAuth')
        }
    })
}

export const verifyTokenAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.isAdmin) {
            next()
        } else {
            res.status(403).json('Error verify Admin')
        }
    })
}