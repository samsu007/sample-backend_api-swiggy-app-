module.exports = (app) => {
    const Customers = require('../controllers/note.controller.js');

    // Create a new customer
    app.post('/customers', Customers.create);

    // Retrieve all customer
    app.get('/customers', Customers.findAll);

    // Retrieve a single customer with customerID
    app.get('/customers/:customersId', Customers.findOne);

    // Update a customer-details with customerID
    app.put('/customers/:customersId', Customers.update);

    // Delete a customer-details with customerID
    app.delete('/customers/:customersId', Customers.delete);
}