const router = require('express').Router()
const signUpHandler = require('./sign-up/index')
const signInHandler = require('./sign-in/index')
const testDataHandler = require('./testData/index')


router.use('/sign-up', signUpHandler);
router.use('/sign-in', signInHandler);
router.use('/test-data', testDataHandler);

module.exports = router;
