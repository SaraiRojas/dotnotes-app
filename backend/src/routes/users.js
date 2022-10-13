// ------------------- Import's -------------------
const express = require('express');
const usersController = require('../controllers/users');

// **** Router ****
const router = express.Router();

// **** Routes ****
router
  .route('/')
  .get(usersController.index) // fetch all users (READ)
  .post(usersController.store); // create and store a user (CREATE)

// Search users by usercode
router.get('/search', usersController.search);

router
  .route('/:id')
  .get(usersController.detail) // fetch a single user
  .delete(usersController.destroy); // delete a user (DELETE)

// ------------------- Exports -------------------
module.exports = router;
