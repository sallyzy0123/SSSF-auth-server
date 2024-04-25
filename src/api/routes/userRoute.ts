import express from 'express';
import {
  // check,
  // checkToken,
  userDelete,
  userGet,
  userListGet,
  userPost,
  userPut,
  userAdminDelete,
} from '../controllers/userController';
import {authenticate} from '../../middlewares';
import {body} from 'express-validator';

const router = express.Router();

router
  .route('/')
  .get(userListGet)
  .post(
    body('email').isEmail().notEmpty(),
    body('user_name').notEmpty().escape(),
    body('password').notEmpty().escape(),
    userPost)
  .put(authenticate, userPut)
  .delete(authenticate, userDelete);

// router.get('/token', authenticate, checkToken);

// router.route('/check').get(check);

router.route('/:id').get(userGet).delete(authenticate, userAdminDelete);

export default router;
