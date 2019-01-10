module.exports = (app) => {
    const Order = require('../controllers/order.controller.js');

    // Create a new order
    app.post('/order/restaurants', Order.create);

    // Retrieve all order
    app.get('/order/restaurants', Order.findAll);

    // Retrieve a single order with orderID
    app.get('/order/restaurants/:orderID', Order.findOne);

    // Update a order with orderID
    app.put('/order/restaurants/:orderID', Order.update);

    // Delete a order with orderID
    app.delete('/order/restaurants/:orderID', Order.delete);
}