const { Contact } = require("../../models/contact");
const { ctrlWrapper } = require("../../helpers");


const add = async (req, res) => {
  const {_id: owner} = req.user;
  const data = await Contact.create({...req.body, owner});
  res.status(201).json(data);
};


module.exports = { add: ctrlWrapper(add) };

