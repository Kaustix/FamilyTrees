const express = require('express');
const router = express.Router();

const mainRouter = require('./routes/rootRoutes');
const personRouter = require('./routes/personRoutes');

router.use('/', mainRouter);
router.use('/person', personRouter);

module.exports = router;