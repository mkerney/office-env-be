const router = require('express').Router()
const signUpHandler = require('./sign-up/index')
const signInHandler = require('./sign-in/index')
const testDataHandler = require('./testData/index')
const tokenAuth = require('../middleware/tokenAuth')
const logoutHandler = require('./logout')


router.use('/sign-up', signUpHandler);
router.use('/sign-in', signInHandler);
router.use(tokenAuth)
router.use('/test-data', testDataHandler);
router.put('/logout', logoutHandler);

module.exports = router;
