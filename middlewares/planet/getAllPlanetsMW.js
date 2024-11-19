/*
    Load all űrlények from teh database
*/
const requireOption = require('../requireOption');

module.exports = function(objRepo) {
    const PlanetModel = requireOption(objRepo, 'PlanetModel');

    return function(req, res, next) {
        if (typeof res.locals.alien === 'undefined') {
            return next();
        }

        PlanetModel.find({ _befozo: res.locals.alien._id }, (err, planet) => {
            if (err) {
                return next(err);
            }

            res.locals.planet = planet;
            return next();
        });
    };
};