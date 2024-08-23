const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://adeshdutta3:mynameisadesh@cluster0.lbbev06.mongodb.net/paytm");

const accountSchema = new mongoose.Schema({
    UserId : {
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
})
const Account = mongoose.model('Account', accountSchema);
module.exports = {Account};