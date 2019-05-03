const models = require('../models/index');


async function logout(req, res, next) {
    try {
        const user = req.currentUser
        user.passwordResetDate = Date.now()

        await user.save()

        res.json({
            success: true
        })
    } catch (error) {
        next(error)
    }
}

module.exports = logout;
