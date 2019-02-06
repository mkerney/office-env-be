const router = require('express').Router()
const singUpHandler = require('./createUser');

router.post('/', singUpHandler);

module.exports = router;
