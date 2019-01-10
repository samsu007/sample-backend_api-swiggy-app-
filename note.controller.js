//signup-controller

const Customer = require('../models/signup.model.js');

// Create and Save a new customer
exports.create = (req, res) => {
     // Validate request
     if(!req.body.phone) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    // Create a customer
    const note = new Customer({
        name: req.body.name || "Untitled Note", 
        password: req.body.password,
        cpassword: req.body.cpassword,
        phone: req.body.phone
    });

    // Save customer-details in the database
    note.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });
};

// Retrieve and return all customer-details from the database.
exports.findAll = (req, res) => {
    Customer.find()
    .then(order => {
        res.send(order);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    }); 
};

// Find a single customer with a customersId
exports.findOne = (req, res) => {
    Customer.findById(req.params.customersId)
    .then(order => {
        if(!order) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.customersId
            });            
        }
        res.send(order);
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

// Update a customer-details identified by the customersId in the request
exports.update = (req, res) => {
        // Validate Request
        if(!req.body.phone) {
            return res.status(400).send({
                message: "Note content can not be empty"
            });
        }
    
        // Find customer-details and update it with the request body
        Customer.findByIdAndUpdate(req.params.customersId, {
            title: req.body.name || "Untitled Note",
            password: req.body.password,
            cpassword: req.body.cpassword,
            phone: req.body.phone
        }, {new: true})
        .then(order => {
            if(!order) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.customersId
                });
            }
            res.send(order);
        }).catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.customersId
                });                
            }
            return res.status(500).send({
                message: "Error updating note with id " + req.params.customersId
            });
        });
};

// Delete a customer-details with the specified customersID in the request
exports.delete = (req, res) => {
    Customer.findByIdAndRemove(req.params.customersId)
    .then(order => {
        if(!order) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.customersId
            });
        }
        res.send({message: "Note deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.customersId
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.customersId
        });
    });
};