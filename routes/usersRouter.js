const express = require('express');

const {
  createNewUsers,
  deleteUserById,
  getAllUsers,
  getUserById,
  updateUserById,
} = require('../controller/users');

const usersRoute = express.Router();

usersRoute.route('/').get(getAllUsers).post(createNewUsers);

usersRoute
  .route('/:id')
  .get(getUserById)
  .patch(updateUserById)
  .delete(deleteUserById);

module.exports = usersRoute;
