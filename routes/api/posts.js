const express = require('express');
const router = express.Router();

router.post('/',(req,res) => res.send('Posts Route'));

module.exports = router;