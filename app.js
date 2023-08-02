const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const contactsRouter = require("./routes/api/contacts");


// const mongoose = require("mongoose");
// const DB_HOST = "mongodb+srv://Liubov:7Qpu4z@CtVKK5GV@cluster0.p4lxqwj.mongodb.net/db-contacts?retryWrites=true&w=majority";

// mongoose.set('strictQuery', true);

// mongoose.connect(DB_HOST)
//     .then(() => console.log("Database connect success"))
//     .catch(error => console.log(error.message))


const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message, stack: err.stack })
})
module.exports = app;


// Liubov Kyrpa kirpa.lyubov.a@gmail.com password = fhdhiofk154
// 7Qpu4z@CtVKK5GV

// vfdjkfbhlffffh453

// mongodb+srv://Liubov:<password>@cluster0.p4lxqwj.mongodb.net/
