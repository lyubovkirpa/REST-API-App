const { Contact } = require("../../models/contact");
const { ctrlWrapper } = require("../../helpers");


const add = async (req, res) => {
  const data = await Contact.create(req.body);
  res.status(201).json(data);
};


module.exports = { add: ctrlWrapper(add) };

