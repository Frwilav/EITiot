// List of wifi fingerprints
var mongoose    =   require("mongoose");
mongoose.connect('mongodb://localhost:27017/database');
var mongoSchema =   mongoose.Schema;
var fingerSchema  = {
    "fingerprint" : String
};
// create model if not exists.
module.exports = mongoose.model('wifiFingerprints',userSchema);
