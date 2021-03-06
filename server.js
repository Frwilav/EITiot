var express     =   require("express");
var app         =   express();
var bodyParser  =   require("body-parser");
var router      =   express.Router();
var fingerprints     =   require("./models/fingerprints");
var users	=   require("./models/users");
var zonepop	=   require("./models/zonepop");
var zones	=   require("./models/zonepop");
var exec = require('child_process').exec;

// TODO : lights should be configured at some point

function lights(zone, color){
	var cmd = /*'TODO : put magic command here'*/;

	exec(cmd, function(error, stdout, stderr) {
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended" : false}));

router.get("/",function(req,res){
    res.json({"error" : false,"message" : "Hello World"});
});

router.route("/users")// all the functions to be called by "users"
    .post(function(req,res){//POST /users – Add new records in MongoDB
	var usersdb = new users();
        var response = {};
        // fetch data from REST request.
        // TODO : INPUT SHOULD BE STRICTLY VALIDATED
        usersdb.id = req.body.id;
	// TODO : fetch the fingerprints here
	// TODO : fetch the optionnal zone here. if zone not specified, try to gess from the fingerprints provided, if this fails, drop the connection. 
	// TODO : do some more shit here (like updating counters)
	// TODO : update the lights
        db.save(function(err){
        // save() will run insert() command of MongoDB.
        // it will add new data in collection.
            if(err) {
                response = {"error" : true,"message" : "Error adding data"};
            } else {
                response = {"error" : false,"message" : "Data added"};
            }
            res.json(response);
        });
    })

    .put(function(req,res){//PUT /users – Update records
        // basically do the same shit as above, but before we chexk if it exists
    })

    .delete(function(req,res){//DELETE /users – Delete particular user
        var response = {};
	var userdb = new users();
	var popdb = new zonepop();
        // find the data
        popdb.findById(req.params.id,function(err,data){
            if(err) {
                response = {"error" : true,"message" : "Error fetching data"};
            } else {
                // data exists, remove it.
                popdb.remove({_id : req.params.id},function(err){
                    if(err) {
                        response = {"error" : true,"message" : "Error deleting data"};
                    } else {
                        response = {"error" : true,"message" : "Data associated with "+req.params.id+"is deleted"};
                    }
                    res.json(response);
                });
            }
	});
	userdb.findById(req.params.id,function(err,data){
            if(err) {
                response = {"error" : true,"message" : "Error fetching data"};
            } else {
                // data exists, remove it.
                popdb.remove({_id : req.params.id},function(err){
                    if(err) {
                        response = {"error" : true,"message" : "Error deleting data"};
                    } else {
                        response = {"error" : true,"message" : "Data associated with "+req.params.id+"is deleted"};
                    }
                    res.json(response);
                });
            }
        });
    });

router.route("/zones")
    .get(function(req,res){//GET /zones give the list of people in every zone
	var zonepopdb = new zonepop();
	//read the db, send it back
    });

// write your own API calls here, I don't give a fuck anymore

app.use('/',router);

app.listen(3000);
console.log("Listening to PORT 3000");
