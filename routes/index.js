const router = require('express').Router()
const signUpHandler = require('./sign-up/index')
const signInHandler = require('./sign-in/index')


router.use('/sign-up', signUpHandler);
router.use('/sign-in', signInHandler);

module.exports = router;
