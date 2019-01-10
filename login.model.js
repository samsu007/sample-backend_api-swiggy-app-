const mongoose = require('mongoose');

const CosSchema = mongoose.Schema({
    name: String,
    password: String,

}, {
    timestamps: true
});

module.exports = mongoose.model('login', CosSchema);