const Order = require('../models/order.model.js');

// Create and Save a new order
exports.create = (req, res) => {
     // Validate request
     if(!req.body.phone) {
        return res.status(400).send({
            message: "order content can not be empty"
        });
    }

    // Create a order
    const note = new Order({
        name: req.body.name || "Untitled order", 
        restaurant: req.body.restaurant,
        dish: req.body.dish,
        address: req.body.address,
        phone: req.body.phone,
        deliveryperson: req.body.deliveryperson
    });

    // Save order in the database
    note.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the order."
        });
    });
};

// Retrieve and return all order from the database.
exports.findAll = (req, res) => {
    Order.find()
    .then(order => {
        res.send(order);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving order."
        });
    }); 
};

// Find a single order with a orderID
exports.findOne = (req, res) => {
    Order.findById(req.params.orderID)
    .then(order => {
        if(!order) {
            return res.status(404).send({
                message: "order not found with id " + req.params.orderID
            });            
        }
        res.send(order);
    }).catch(err => {
        if(err.kind === 'orderID') {
            return res.status(404).send({
                message: "order not found with id " + req.params.orderID
            });                
        }
        return res.status(500).send({
            message: "Error retrieving order with id " + req.params.orderID
        });
    });
};

// Update a order identified by the orderID in the request
exports.update = (req, res) => {
        // Validate Request
        if(!req.body.orderID) {
            return res.status(400).send({
                message: "order content can not be empty"
            });
        }
    
        // Find order and update it with the request body
        Order.findByIdAndUpdate(req.params.orderID, {
            name: req.body.name || "Untitled order",
            restaurant: req.body.restaurant,
            dish: req.body.dish,
            address: req.body.address,
            phone: req.body.phone,
            deliveryperson: req.body.deliveryperson
        }, {new: true})
        .then(order => {
            if(!order) {
                return res.status(404).send({
                    message: "order not found with id " + req.params.orderID
                });
            }
            res.send(order);
        }).catch(err => {
            if(err.kind === 'orderID') {
                return res.status(404).send({
                    message: "order not found with id " + req.params.orderID
                });                
            }
            return res.status(500).send({
                message: "Error updating order with id " + req.params.orderID
            });
        });
};

// Delete a order with the specified orderID in the request
exports.delete = (req, res) => {
    Order.findByIdAndRemove(req.params.orderID)
    .then(order => {
        if(!order) {
            return res.status(404).send({
                message: "order not found with id " + req.params.orderID
            });
        }
        res.send({message: "order deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'orderID' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "order not found with id " + req.params.orderID
            });                
        }
        return res.status(500).send({
            message: "Could not delete order with id " + req.params.orderID
        });
    });
};