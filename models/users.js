// List of user ids
var mongoose    =   require("mongoose");
mongoose.connect('mongodb://localhost:27017/database');
var mongoSchema =   mongoose.Schema;
var userSchema  = {
    "id" : String//id of each user
};
// create model if not exists.
module.exports = mongoose.model('userId',userSchema);
