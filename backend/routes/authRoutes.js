const express = require('express');
const router = express.Router();
const { signup, login, getUser } = require('../controllers/authController');

router.post('/signup', signup);
router.post('/login', login);
router.get('/getUser', getUser);

module.exports = router;
