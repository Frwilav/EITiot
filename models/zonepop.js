// List of people present in each zone and the time they were last seen. A user should be deleted from the table after a certain time
var mongoose    =   require("mongoose");
mongoose.connect('mongodb://localhost:27017/database');
var mongoSchema =   mongoose.Schema;
var zonePopSchema  = {
    "zone" : Integer,//reference of the zone
    "id" : { type : Schema.ObjectId, ref : 'users' },//id of a user present in a zone
    "lastSeen" : { type : Date, default : Date.now }//last time the user was seen
};
// create model if not exists.
module.exports = mongoose.model('zonePop',zonePopSchema);
