const {
    User
} = require('../models');

module.exports = {
// create a user
    createUser: async (req, res) => {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ error: 'You must provide a username and password'});
        }
        try {
            const user = await User.create({
                username,
                password,
            });
            res.json(user);
        } catch (e) {
            res.json(e);
        }
    },

// render homepage
    renderHomepage: async (req, res) => {
        res.render('homepage');
    },

// get all users
    // getAllUsers: async (req, res) => {
    //     try {
    //         const usersData = await User.findAll({});
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
        try {
            const userData = await User.findByPk(req.params.userId);
            const user = userData.get({ plain: true });
            res.render('singleUser', {
                user
            });
        } catch (e) {
            res.json(e);
        }
    },

    // login
    login: async (req, res) => {
        try {
            const userData = await User.findOne({ username: req.body.username });
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
        }
    },

// sign up handler
    signupHandler: async (req, res) => {
        const { email, username, password } = req.body;
        if (!email || !username || !password) {
            return res.json({ error: 'You must provide email, username, and password' });
        }
        try {
            const createdUser = await User.create({
                email,
                username,
                password
            });
            const user = createdUser.get({ plain: true });
            req.session.save(() => {
                req.session.loggedIn = true;
                req.session.user = user;
                res.redirect('/todos');
            })
        } catch (e) {
            res.json(e);
        }
    },

// login view
    loginView: (req, res) => {
        if (req.session.loggedIn) {
            return res.redirect('/homepage');
        }
        res.render('signup');
    },

// sign up view
    signupView: (req, res) => {
        if (req.session.loggedIn) {
            return res.redirect('/homepage');
        }
        res.render('signup');
    },

};