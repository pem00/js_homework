/*
    Saves the modified or new entry of an alien using POST
    redirects to /overview after success
*/
const requireOption = require('../requireOption');

module.exports = function(objRepo) {
    const AlienModel = requireOption(objRepo, 'AlienModel');

    return function(req, res, next) {
        if (
            typeof req.body.faj === 'undefined' ||
            typeof req.body.tech === 'undefined' ||
            typeof req.body.kolon_db === 'undefined'
        ) {
            return next();
        }

        if (typeof res.locals.alien === 'undefined') {
            res.locals.alien = new AlienModel();
        }

        res.locals.alien.faj = req.body.faj;
        res.locals.alien.tech = req.body.tech;
        res.locals.alien.kolon_db = req.body.kolon_db;

        res.locals.alien.save(err => {
            if (err) {
                return next(err);
            }

            return res.redirect('/overview');
        });
    };
};