const mongoose = require("mongoose");
const url =
  "mongodb+srv://nikhil:root@cluster0.9odug.mongodb.net/mygosolar?retryWrites=true&w=majority";

mongoose
  .connect(url)
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = mongoose;
