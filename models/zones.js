// List of fingerprints per zone and the number of time they have been detected in this zone. If the same fingerprint is detected many times in the same zone (by different users), it can be used to characterise a zone.
var mongoose    =   require("mongoose");
mongoose.connect('mongodb://localhost:27017/database');
var mongoSchema =   mongoose.Schema;
var zoneSchema  = {
    "fingerprint" : { type : Schema.ObjectId, ref : 'fingerprints' },
    "zone" : { type : Schema.ObjectId, ref : 'zonepop' },//which zone this print has been tagged in
    "count" : Integer//the number of times this print has been tagged in this zone (-> so that we can identify which fingerprints caracterise each zone 
};
// create model if not exists.
module.exports = mongoose.model('zoneList',zoneSchema);
