const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const { renderHomepage, loginView, signupView } = require('../controllers/userController');

router.get('/', renderHomepage);
router.get('/login', loginView);
router.get('/signup', signupView);
router.use('/api', apiRoutes);

module.exports = router;