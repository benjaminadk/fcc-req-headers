var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/api/whoami', whoAmI);

function whoAmI(req, res, next){
    var ip = req.headers["x-forwarded-for"];
    var language = req.headers["accept-language"].split(',')[0];
    var osInfo = req.headers["user-agent"];
    var data = {
        "ip_address": ip,
        "language": language,
        "user-agent": osInfo
    }

     res.status(200).json(data);
    
}

module.exports = router;
