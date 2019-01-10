const express = require('express');
const router = express.Router();

const otherpagescontroller = require('../controllers/otherpages.controller');

//Create a get Requests for all other pages like(search,offer,support...)

router.get('/search', otherpagescontroller.search);

router.get('/offer', otherpagescontroller.offer);

router.get('/support', otherpagescontroller.support);

router.get('/myaccount', otherpagescontroller.myaccount);

router.get('/checkout', otherpagescontroller.checkout);

module.exports = router;
