var router = require("express").Router();

//Routes
router.get("/", function(req, res){
    res.render("landing");
});


//Routes
router.get("/options", function(req, res){
    res.render("options");//not landing
});

module.exports = router;
