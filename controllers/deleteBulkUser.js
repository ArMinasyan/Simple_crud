const User = require('../models/users');

module.exports = async (req, res) => {
    const id = req.params.id;
    const deletedUser = await User.findByIdAndRemove(id);
    if (deletedUser) res.status(200).json({ msg: "Users were deleted.", deleted: true });
    else res.status(200).json({ deleted: false });
    
}