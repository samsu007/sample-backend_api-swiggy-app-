const Product = require('../models/otherpages.model');

//Simple version, without validation or sanitation
exports.search = function (req, res) {
    res.send('welcome to Search Page');
};

exports.offer = function (req, res) {
    res.send('welcome to offer Page');
};

exports.support = function (req, res) {
    res.send('welcome to support Page');
};

exports.myaccount = function (req, res) {
    res.send('welcome to myaccount Page');
};

exports.checkout = function (req, res) {
    res.send('welcome to checkout Page');
};