const express = require('express');
const tourController = require('../controllers/tourController');
const auhtController = require('../controllers/authController')

const router = express.Router();

router.route('/top-5-cheap')
    .get(tourController.aliasTopTours, tourController.gelAllTours);

router
    .route('/tour-stats')
    .get(tourController.getTourStats);


router
  .route('/monthly-plan/:year')
  .get(tourController.getMonthlyPlan);


router
    .route('/')
    .get(auhtController.protect ,tourController.gelAllTours)
    .post(tourController.createTour);

router
    .route('/:id')
    .get(tourController.getTour)
    .patch(tourController.editTour)
    .delete(auhtController.protect,
        auhtController.restrictTo('admin','lead-guide'),
        tourController.deleteTour);

module.exports = router