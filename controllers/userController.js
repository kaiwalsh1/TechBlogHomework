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
            const users = await User.findAll({});
            res.json(users);
        } catch (e) {
            res.json(e);
        }
    },
};