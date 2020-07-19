const express = require('express');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const router = express.Router();

router
  .route('/signup')
  .post(authController.signup);

router
  .route('/login')
  .post(authController.login);

router
  .route('/forgotPassword')
  .post(authController.forgotPassword);

router
  .patch(
    '/resetPassword/:token', 
    authController.resetPassword
  );

router
  .patch(
    '/updateMyPassword',
    authController.protect, 
    authController.updatePassword
  );

router
  .delete(
    '/deleteMe', 
    authController.protect, 
    userController.deleteMe
    );

router
    .patch(
      '/updateMe',
      authController.protect,
      userController.updateMe
    );

router
  .route('/')
  .get(userController.gelAllUsers)
  .post(userController.createUser);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.editUser)
  .delete(userController.deleteUser);



module.exports = router;