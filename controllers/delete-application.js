const Application = require("../models/db").model("Application");

module.exports = (req, res, next) => {
    Application
      .deleteOne({_id: req.params.id})
      .then(() => res.status(204).end())
      .catch(err => next(err));
};