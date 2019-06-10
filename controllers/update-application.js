const Application = require('../models/db').model('Application');

module.exports = (req, res, next) => {
    Application
      .updateOne({_id: req.params.id}, req.body)
      .then(application => res.json(application))
      .catch(err => next(err));
};
