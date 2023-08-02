const express = require("express");
const router = express.Router();

const {
  getAll,
  getById,
  add,
  deleteById,
  updateById,  
} = require("../../controllers/contactsControllers");

const { validateBody } = require("../../middlewares/validateBody");
const { isValidId } = require("../../middlewares/isValidId");

const { schemas } = require("../../models/contact");


router.get("/", getAll);

router.get("/:contactId", isValidId, getById);

router.post("/", validateBody(schemas.contactsSchemas), add);

router.delete("/:contactId", isValidId, deleteById);

router.put("/:contactId", isValidId, validateBody(schemas.contactsSchemas), updateById);


module.exports = router;
