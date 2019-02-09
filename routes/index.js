var router = require("express").Router();

//Routes
router.get("/", function(req, res){
    res.render("landing");
});


module.exports = router;
