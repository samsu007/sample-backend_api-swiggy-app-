const mongoose = require('mongoose');

const CosSchema = mongoose.Schema({
    name: String,
    password: String,
    cpassword: String,
    phone: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Customer', CosSchema);