const router = require('express').Router();
const { createBlog, editBlog, deleteBlog } = require('../../../controllers/blogController');

router.post('/newblog', createBlog);
router.post('/editblog', editBlog);
router.post('/deleteblog', deleteBlog);

module.exports = router;