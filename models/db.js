const mongoose = require("mongoose");
const applicationSchema = require("./application");
const notifier = require("node-notifier");
const url = "mongodb://appuser1:appuser1@ds135107.mlab.com:35107/application_manager";

mongoose
  .connect(url, {useNewUrlParser: true})
  .then(() => notifier.notify({
      "title"  : "SUCCESS",
      "message": "Connected correctly to database"
  }))
  .catch((err) => notifier.notify({
      "title"  : "ERROR",
      "message": "connection error: " + err
  }));

mongoose.connection.model("Application", applicationSchema);

module.exports = mongoose.connection;
