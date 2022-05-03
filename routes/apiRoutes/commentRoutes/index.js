const router = require('express').Router();
const { createComment, getInfo, setComment } = require('../../../controllers/commentController');

router.post('/newcomment', createComment);

router.route('/:blogId')
    .get(getInfo);

router.route('/set')
    .post(setComment);

module.exports = router;