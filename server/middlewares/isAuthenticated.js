import jwt from 'jsonwebtoken'
export const isAuthenticated = async (req, res, next) => {

    try {
        const token = req.cookies.accessToken
        if (!token) {
            return res.status(401).json({
                message: 'No token, authorization denied'
            })
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
        next()

    } catch (error) {

        console.log(error)
        return res.status(401).json({
            message: 'Token is not valid'
        })
    }
}

