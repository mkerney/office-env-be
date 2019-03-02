const router = require('express').Router()
const testData = require('./create')


router.post('/', testData);

module.exports = router;
