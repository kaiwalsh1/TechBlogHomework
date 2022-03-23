const {
    Blog,
    Comment
} = require('../models');

module.exports = {
    // create blog
    createBlog: async (req, res) => {
        // if (!req.session.loggedIn) {
        //     return res.render('/login');
        // };
        const { title, content, userId } = req.body;
        try {
            const blog = await Blog.create({
                title,
                content,
                userId
            });
            res.json(blog);
            console.log(blog);
        } catch (e) {
            res.json(e);
        }
    },

        // editBlog
        editBlog: async (req, res) => {
            try {
                const blogData = await Blog.findByPk(req.params.blogId);
                const blog = blogData.get({ plain: true });
                res.render('editBlog', {
                    blog
                });
            } catch (e) {
                res.json(e);
            }
        },
    
        // deleteBlog
        deleteBlog: async (req, res) => {
            const { id } = req.body;
            try {
                await Blog.destroy({
                    where: {
                        id
                    },
                });
            } catch (e) {
                res.json(e);
            }
        },

    // get user blogs
    getUserBlogs: async (req, res) => {
        // if (!req.session.loggedIn) {
        //     return res.redirect('/login');
        // }
        try {
            const userBlogData = await Blog.findAll({
                where: {
                    
                },
                order: [
                    ['createdAt', 'DESC'],
                ],
            });
            res.render('homepage', {
                userBlogs: userBlogData.map(userBlog => userBlog.get({ plain: true })),
                user: req.session.user,
            });
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
