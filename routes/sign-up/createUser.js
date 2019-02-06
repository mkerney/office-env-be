const models = require('../../models/index');


async function createUser(req, res, next) {
    try {
        const user = await models.user.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });

        res.json({
            user,
            success: true
        })
    } catch (error) {
        next(error)
    }
}

module.exports = createUser;
