var router = require("express").Router();

//Routes
router.get("/options", function(req, res){
    res.render("options");//not landing
});


module.exports = router;
