module.exports = (app) => {
    const login = require('../controllers/login.controller.js');


    // Retrieve all login-details
    app.get('/customers', login.findAll);



    // Retrieve a single login-details with customersID
    app.get('/customers/:customersId', login.findOne);


};