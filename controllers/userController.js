const {
    User,
    Blog
} = require('../models');

module.exports = {
// create a user
    createUser: async (req, res) => {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            return res.status(400).json({ error: 'You must provide username, email, and password'});
        }
        try {
            const user = await User.create({
                username,
                email,
                password,
            });
            res.json(user);
        } catch (e) {
            res.json(e);
        }
    },

// get all users
    // getAllUsers: async (req, res) => {
    //     try {
    //         const usersData = await User.findAll({
    //         });
    //         const users = usersData.map(user => user.get({plain: true}));
    //         res.render('allUsers', {
    //             users,
    //         });
    //     } catch (e) {
    //         res.json(e);
    //     }
    // },

// single user
    getUserById: async (req, res) => {
        req.session.save(() => {
            if (req.session.visitCount) {
                req.session.visitCount++;
            } else {
                req.session.visitCount = 1;
            }
        });
        try {
            const userData = await User.findByPk(req.params.userId);
            const user = userData.get({ plain: true });
            res.render('singleUser', {
                user,
                visitCount: req.session.visitCount
            });
        } catch (e) {
            res.json(e);
        }
    },

    // login
    login: async (req, res) => {
        try {
            const userData = await User.findOne({ 
                where: {
                    username: req.body.username
                }
            });
            const userFound = userData.get({ plain: true });
            if (userFound.password === req.body.password) {
                req.session.save(() => {
                    req.session.loggedIn = true;
                    req.session.user = userFound;
                    res.json({ success: true });
                });
            }
        } catch (e) {
            res.json(e);
            console.log(e);
        }
    },

    // logout 
    logout: (req, res) => {
        req.session.destroy(() => {
            res.send({ status: true });
        });
    },

// sign up handler
    signupHandler: async (req, res) => {
        const { username, email, password } = req.body;
        try {
            const createdUser = await User.create({
                username,
                email,
                password,
            });
            const user = createdUser.get({ plain: true });
            req.session.save(() => {
                req.session.loggedIn = true;
                req.session.user = user;
                res.redirect('/homepage');
            });
        } catch (e) {
            res.json(e);
        }
    },

// login view
    loginView: (req, res) => {
        if (req.session.loggedIn) {
            return res.redirect('/homepage');
        }
        res.render('login');
    },

// sign up view
    signupView: (req, res) => {
        if (req.session.loggedIn) {
            return res.redirect('/homepage');
        }
        res.render('signup');
    },


};