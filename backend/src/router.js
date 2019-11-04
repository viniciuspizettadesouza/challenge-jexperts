const express = require('express');
const UserController = require('./controller/UserController');

const router = express.Router();

router.get('/users', UserController.show);

router.post('/store-user', UserController.store);

module.exports = router;