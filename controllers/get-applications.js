const Application = require('../models/db').model('Application');

module.exports = {
    byId: (req, res, next) => {
        Application
          .findById(req.params.id)
          .then(applications => res.json(applications))
          .catch(err => next(err));
    },
    all : (req, res, next) => {
        Application
          .find({})
          .then(applications => res.json(applications))
          .catch(err => next(err));
    }
};