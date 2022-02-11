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
// get all users
    getAllUsers: async (req, res) => {
        try {
            const usersData = await User.findAll({});
            const users = usersData.map(user => user.get({plain: true}));
            res.render('allUsers', {
                users,
            });
        } catch (e) {
            res.json(e);
        }
    },
};