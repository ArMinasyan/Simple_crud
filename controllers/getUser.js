const User = require('../models/users');

module.exports = async (req, res) => {
    const getUser = await User.find();
    if (getUser) {
        res.status(200).send(getUser);
    }    else res.status(200).send("There are no users");
}