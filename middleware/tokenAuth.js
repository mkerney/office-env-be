const jwt = require('jsonwebtoken');
const models = require('../models/index');

async function authToken(req, res, next) {
    try {
        const receivedToken = req.headers.token;
        if (receivedToken) {
            const decodedToken = jwt.verify(receivedToken, process.env.JWT_SECRET_TOKEN);
            const user = await models.user.findOne({
                where: {
                    email: decodedToken.email,
                },
            });
            if (user) {
                if (decodedToken.iat >= Math.floor(Number(user.passwordResetDate) / 1000)) {
                    req.currentUser = user;
                    next();
                } else {
                    res.clearCookie('token');
                    throw new Error('Please login again');
                }
            } else {
                res.clearCookie('token');
                throw new Error('User not found');
            }
        } else {
            res.clearCookie('token');
            throw new Error('Token not found');
        }
    } catch (error) {
        next(error);
    }
}

module.exports = exports = authToken;
