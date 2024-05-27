

export const isAdmin = async (req, res, next) => {

    if (req.user.isAdmin === true) {
        return next();
    }
    return res.status(401).json({
        message: 'You are not authorized to perform this action'
    });
}