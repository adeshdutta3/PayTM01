const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://adeshdutta3:mynameisadesh@cluster0.lbbev06.mongodb.net/paytm");

const userschema = new mongoose.Schema({
    username : String,
    firstname : String,
    lastname : String,
    password : String ,
    DOB : String,
});
const User = mongoose.model("User",userschema);

module.exports = {User};