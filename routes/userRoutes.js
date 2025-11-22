const express = require('express');
const router = express.Router();

const { createUser, getUsers } = require('../controllers/userController');

// POST /users  → createUser
router.post('/', createUser);

// GET /users  → getUsers
router.get('/', getUsers);

module.exports = router;
