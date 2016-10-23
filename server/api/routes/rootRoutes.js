const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    return res.send({ message: "Welcome to Family Trees!"})
});

module.exports = router;