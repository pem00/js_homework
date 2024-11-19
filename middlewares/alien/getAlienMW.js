/*
    Load one űrlények from teh database
*/
const requireOption = require('../requireOption');

module.exports = function(objRepo) {
    const AlienModel = requireOption(objRepo, 'AlienModel');

    return function(req, res, next) {
        AlienModel.findOne({ _id: req.params.alienid }, (err, alien) => {
            if (err || !alien) {
                return next(err);
            }

            res.locals.alien = alien;
            return next();
        });
    };
};
