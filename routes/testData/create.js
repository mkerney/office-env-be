const models = require('../../models/index');


async function testData(req, res, next) {
    try {
        const testData = await models.testData.create({
            env: req.body.env,
            medicaid: req.body.medicaid,
            programType: req.body.programType,
            transactionType: req.body.transactionType,
            comment: req.body.comment,
            submitterId: req.currentUser.id
        });

        res.json({
            testData,
            success: true
        })
    } catch (error) {
        next(error)
    }
}

module.exports = testData;
