const {User} =  require("../../models/user");

const { ctrlWrapper } = require("../../helpers");


const logout = async(req, res) => {
  const {_id} = req.user;
  await User.findByIdAndUpdate(_id, {token: null});

  res.json({ message: "No Content"})
}


module.exports = { 
  logout: ctrlWrapper(logout),
}
