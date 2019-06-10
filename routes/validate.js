const {body, param} = require('express-validator/check');
const {sanitizeBody, sanitizeParam} = require('express-validator/filter');

const requestBody = [
    sanitizeBody('availableToStart')
      .toDate(),

    sanitizeBody('studyFromHome')
      .toBoolean(),

    sanitizeBody([
        'email',
        'name',
        'phone',
        'englishLevel',
        'age',
        'preferredWayOfCommunication',
        'technicalSkills',
        'shortPersonalPresentation'])
      .escape()
      .trim(),

    body('email')
      .isEmail(),

    body('name')
      .isAlpha()
      .isLength({min: 2, max: 100}),

    body('englishLevel')
      .isIn(['Fluent', 'Intermediate', 'Beginner']),

    body('age')
      .isNumeric(),

    body('phone')
      .isMobilePhone('any'),

    body('preferredWayOfCommunication')
      .isIn(['Phone', 'Email']),

    body('availableToStart')
      .isISO8601({strict: true}),
];

const routeParam = [
    sanitizeParam('id')
      .trim(),

    param('id')
      .isMongoId()
];

module.exports = {
    requestBody,
    routeParam
};