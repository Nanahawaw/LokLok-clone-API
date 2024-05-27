import jwt from 'jsonwebtoken'

export const isAdmin = async (req, res, next) => {

    const token = req.cookies.accessToken
    if (!token) {
        return res.status(401).json({
            message: 'No token, authorization denied'
        })
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded
    if (req.user.isAdmin === true) {
        return next();
    }
    return res.status(401).json({
        message: 'You are not authorized to perform this action'
    });
}