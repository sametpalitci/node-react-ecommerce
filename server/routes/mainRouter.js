const express = require('express');
const router = express.Router();

const customerRouter = require('./customerRouter');

router.use('/customer', customerRouter);

module.exports = router;
