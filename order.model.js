const mongoose = require('mongoose');

const CosSchema = mongoose.Schema({
    name: String,
    restaurant: String,
    dish: String,
    address: String,
    phone: String,
    deliveryperson: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Order', CosSchema);