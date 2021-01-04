const User = require('../models/users');

module.exports = async (req, res) => {
    const newUser = await User.collection.insertOne(req.body);
    if (newUser) res.status(200).json({ inserted: true, msg: "User is inserted." });
    else res.status(200).json({ inserted: false });
}