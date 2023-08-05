const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");
const Joi = require("joi");

// регулярний вираз для провiрки email
const emailRegexp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;


const userSchema = new Schema(
  {
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    email: {
      type: String,
      match: emailRegexp,
      required: [true, 'Email is required'],
      unique: true,
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter"
    },
    token: {
      type: String,
      default: null,
    },
  }, { versionKey: false, timestamps: true});

  userSchema.post("save", handleMongooseError);


  const registerSchema = Joi.object({
    password: Joi.string().min(6).required(),
    email: Joi.string().pattern(emailRegexp).required(),
    subscription: Joi.string(),
    token: Joi.string(),
  });

  const loginSchema = Joi.object({
    password: Joi.string().min(6).required(),
    email: Joi.string().pattern(emailRegexp).required(),
  });

  const schemas = {
    registerSchema, loginSchema,
  };

  const User = model("user", userSchema);

  module.exports = {
    User, schemas,
  }