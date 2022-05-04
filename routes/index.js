const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const { loginView, signupView } = require('../controllers/userController');
const { getUserBlogs, getAllBlogs, renderBlog } = require('../controllers/blogController');

router.get('/', loginView);
router.get('/homepage', getAllBlogs);
router.get('/dashboard', getUserBlogs);
router.get('/newblog', renderBlog);
router.get('/login', loginView);
router.get('/signup', signupView);

router.use('/api', apiRoutes);

module.exports = router;

