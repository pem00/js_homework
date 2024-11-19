/*
    Load all bolygók from the database
*/
const requireOption = require('../requireOption');

module.exports = function(objRepo) {
    const AlienModel = requireOption(objRepo, 'AlienModel');

    return function(req, res, next) {
        AlienModel.find({}, (err, alien) => {
            if (err) {
                return next(err);
            }

            res.locals.alien = alien;
            return next();
        });
    };
};