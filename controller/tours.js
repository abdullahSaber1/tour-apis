const TOURS = require('../model/toursModel');

const catchAsync = (fn) => async (req, res, next) => {
  try {
    await fn(req, res);
  } catch (error) {
    next({ error });
  }
};

module.exports = {
  findById: catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const tour = await TOURS.findById(id);

    if (tour === null) {
      next({
        status: 'Failuar',
        message: 'user Not Found',
      });
    }
    req.tour = tour;

    // send to Global error Handeler in app.js
    next();
  }),
  getAllTours: async (req, res) => {
    // const quary=JSON.stringify(req.quary);

    // quary=quary.replace(/(gt|gte|lt|lte)/,(match)=>`$${match}`);

    try {
      const tours = await TOURS.find();

      res.json({
        status: 'succuss',
        data: tours,
      });
    } catch (error) {
      res.status(500).json({
        status: 'Failuar',
        message: error.message,
      });
    }
  },
  getTourById: async (req, res) => {
    try {
      const { tour } = req;
      res.json({
        status: 'success',
        data: tour,
      });
    } catch (error) {
      res.status(400).json({
        status: 'failure',
        message: error.message,
      });
    }
  },

  createTour: async (req, res) => {
    try {
      const tour = await TOURS.create(req.body);

      res.json({
        status: 'success',
        data: tour,
      });
    } catch (error) {
      res.status(400).json({
        status: 'failure',
        message: error.message,
      });
    }
  },

  updateTourById: (req, res) => {
    try {
      const tour = TOURS.findByIdAndUpdate(req.params.id, {
        new: true,
      });

      res.json({
        status: 'success',
        data: tour,
      });
    } catch (error) {
      res.status(400).json({
        status: 'failure',
        message: error.message,
      });
    }
  },

  deleteTourById: async (req, res) => {
    try {
      const tour = TOURS.findByIdAndRemove(res.params.id, {
        new: true,
      });

      res.json({
        status: 'succuss',
        data: tour,
      });
    } catch (error) {
      res.status(400).json({
        status: 'failure',
        message: error.message,
      });
    }
  },
};
