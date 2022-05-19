const router = require('express').Router();
const {
    createUser,
    getUserById,
    login,
    signupHandler,
    logout,
} = require('../../../controllers/userController');

router.route('/')
    .post(createUser);

router.route('/login')
    .post(login);

router.route('/signup')
    .post(signupHandler);

// router.post('/signup', signupHandler);
// router.post('/login', login);
router.post('/logout', logout);



router.route('/:userId')
    .get(getUserById);

module.exports = router;