const express = require('express');

const {
  createTour,
  getAllTours,
  getTourById,
  deleteTourById,
  updateTourById,
  findById,
} = require('../controller/tours');

const toursRoute = express.Router();

toursRoute.route('/').get(getAllTours).post(createTour);

toursRoute.use('/:id', findById);

toursRoute
  .route('/:id')
  .get(getTourById)
  .patch(updateTourById)
  .delete(deleteTourById);

module.exports = toursRoute;
