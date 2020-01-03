const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

mongoose
  .connect(
    "mongodb+srv://instaclone:12345@meubanco-tgxc0.mongodb.net/test?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true
    }
  )
  .then(() => console.log("Application Connected!"))
  .catch(err => {
    console.log(Error, err.message);
  });
app.use(
  "/files",
  express.static(path.resolve(__dirname, "..", "uploads", "resized"))
);

app.use(require("./routes"));

app.listen(3333);
