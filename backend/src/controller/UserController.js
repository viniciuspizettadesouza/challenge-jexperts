const User = require('../model/User')

module.exports = {

    async show(req, res) {
        const { user_id } = req.headers
        const users = await User.find({ user: user_id })
        return res.json(users)
    },

    async store(req, res) {
        try {
            const newUser = await User.create(req.body);
            return res.status(200).send({ newUser });
        } catch (err) {
            return res.status(400).send({ error: 'User registration failed' });
        }
    }
}