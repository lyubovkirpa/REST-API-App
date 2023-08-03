const { ctrlWrapper } = require("../../helpers");

const getAll = require("./getAllContacts");
const getById = require("./getByIDContacts");
const add = require("./addContact");
const deleteById = require("./deleteByIdContacts");
const updateById = require("./updateByIdContacts");
const updateFavorite = require("./updateFavoriteContacts");



module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  deleteById: ctrlWrapper(deleteById),
  updateById: ctrlWrapper(updateById),
  updateFavorite: ctrlWrapper(updateFavorite),
};

