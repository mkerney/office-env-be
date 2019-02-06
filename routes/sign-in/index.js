const router = require('express').Router()
const loginHandler = require('./login')


router.post('/', loginHandler);

module.exports = router;
