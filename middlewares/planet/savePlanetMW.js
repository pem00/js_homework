/*
    Saves the modified or new entry of an planet using POST
    redirects to /overview after success
*/
const requireOption = require('../requireOption');

module.exports = function(objRepo) {
    const PlanetModel = requireOption(objRepo, 'PlanetModel');

    return function(req, res, next) {
        if (
            typeof req.body.fajta === 'undefined' ||
            typeof req.body.lakhatosag === 'undefined' ||
            typeof req.body.statusz === 'undefined' ||
            typeof res.locals.alien === 'undefined'
        ) {
            return next();
        }

        if (typeof res.locals.planet === 'undefined') {
            res.locals.planet = new PlanetModel();
        }

        res.locals.planet.fajta = req.body.iz;
        res.locals.planet.lakhatosag = res.locals.planet.lakhatosag
        res.locals.planet.statusz = req.body.statusz;
        res.locals.planet._kolon = res.locals.alien._id;

        res.locals.planet.save(err => {
            if (err) {
                return next(err);
            }

            return res.redirect(`/planet/${res.locals.alien._id}`);
        });
    };
};