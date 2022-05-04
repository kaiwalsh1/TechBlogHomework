const { Blog, Comment, User } = require('../models');

module.exports = {

    setComment: async (req, res) => {
        const { blogId } = req.body;
        req.session.blogId = blogId;
    },

    getInfo: async (req, res) => {
        const blogId = req.params.blogId;
        try {
            const commentData = await Comment.findAll({
                where: {
                    blogId
                },
                include: [{
                    model: User,
                    attributes: ['username'],
                }],
                order: [
                    ['createdAt', 'ASC'],
                ],
            });
            const blogData = await Blog.findByPk(blogId);
            res.render('comment', {
                allComments: commentData.map(comment => comment.get({ plain: true })),
                blogs: blogData.get({ plain: true }),
                user: req.session.user,
            });
        } catch (e) {
            res.json(e);
        }
    },

    createComment: async (req, res) => {
        const { text, blogId } = req.body;
        try {
            const comment = await Comment.create({
                text,
                blogId,
                userId: req.session.user.id,
            });
            res.json(comment);
        } catch (e) {
            res.json(e);
        }
    },

};