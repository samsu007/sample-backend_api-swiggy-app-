const login = require('../models/login.model.js');


// Retrieve and return all login-details from the database.
exports.findAll = (req, res) => {
    login.find()
    .then(customers => {
        res.send(customers);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    }); 
};

// Find a single login with a customersID
exports.findOne = (req, res) => {
    login.findById(req.params.customersId)
    .then(customer => {
        if(!customer) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.customersId
            });            
        }
        res.send(customer);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.customersId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.customersId
        });
    });
};

