var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.send("Successfully connected to backend");
});



module.exports = router;
