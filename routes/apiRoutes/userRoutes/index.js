const router = require('express').Router();
const {
    createUser,
    getUserById,
    login,
    signUpHandler,
    logout,
} = require('../../../controllers/userController');

router.route('/')
    .post(createUser);

router.route('/login')
    .post(login);

router.route('/signUp')
    .post(signUpHandler);

router.post('/logout', logout);



router.route('/:userId')
    .get(getUserById);

module.exports = router;