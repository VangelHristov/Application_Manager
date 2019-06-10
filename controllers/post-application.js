const Application = require('../models/db').model("Application");

module.exports = (req, res, next) => {
    console.log(req.body);
    Application
      .create(req.body)
      .then(app => res.json(app))
      .catch(err => next(err));
};