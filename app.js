var express        = require("express"),
    app            = express(),
    bodyParser     = require("body-parser"),
    methodOverride = require("method-override");

//Requiring routes
var projectRoutes = require("./routes/projects"),
    indexRoutes = require("./routes/index"),
    profileRoutes = require("./routes/profile");

//Middleware 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");


//Routes
app.use("/", indexRoutes);
app.use("/projects", projectRoutes);
app.use("/profiles", profileRoutes);

var port = process.env.PORT || 8080;
app.listen(port, function(){
    console.log("Started on PORT " + port);
});
