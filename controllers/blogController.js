const {
    Blog,
    Comment
} = require('../models');

module.exports = {
    // create blog
    createBlog: async (req, res) => {
        const { title, content } = req.body;
        try {
            const blog = await Blog.create({
                title,
                content,
            });
            res.json(blog);
            console.log(blog);
        } catch (e) {
            res.json(e);
        }
    },

    // get all blogs
    getAllBlogs: async (req, res) => {
        try {
            const blogData = await Blog.findAll({});
            const blogs = blogData.map(blog => blog.get({ plain: true }));
            res.render('allBlogs', {
                blogs,
            });
        } catch (e) {
            res.json(e);
        }
    },

    // single blog
    getBlogById: async (req, res) => {
        try {
            const blogData = await Blog.findByPk(req.params.blogId);
            const blog = blogData.get({ plain: true });
            res.render('singleBlog', {
                blog
            });
        } catch (e) {
            res.json(e);
        }
    },
};
