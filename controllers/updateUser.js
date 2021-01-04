const User = require('../models/users');

module.exports = async (req, res) => {
    const id = req.params.id;
    const updatedUser = await User.findByIdAndUpdate(id, req.body);
    if (updatedUser) res.status(200).json({ updated: true, msg: "User is updated." })
    else res.status(200).json({ updated: false });
}