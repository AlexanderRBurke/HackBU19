var express        = require("express"),
    app            = express(),
    bodyParser     = require("body-parser"),
    methodOverride = require("method-override");

//Requiring routes
var    indexRoutes = require("./routes/index");
       optionsRoutes= require("./routes/options");
       resultsRoutes= require("./routes/results");

//Middleware 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");


//Routes
app.use("/", indexRoutes);
app.use("/options",optionsRoutes);
app.use("/results",optionsRoutes);

var port = process.env.PORT || 8080;
app.listen(port, function(){
    console.log("Started on PORT " + port);
});
