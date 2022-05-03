const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const { loginView, signupView } = require('../controllers/userController');
const { getUserBlogs, getAllBlogs } = require('../controllers/blogController');

router.get('/', loginView);
router.get('/homepage', getUserBlogs);
// router.get('/homepage', getUserBlogs);
router.get('/dashboard', getAllBlogs);
router.get('/login', loginView);
router.get('/signup', signupView);
router.use('/api', apiRoutes);

module.exports = router;



// const { getUserPosts, getAllPosts, renderPost } = require('../controllers/postController');

// router.get('/homepage', getUserPosts);
// router.get('/dashboard', getAllPosts);
// router.get('/newpost', renderPost);