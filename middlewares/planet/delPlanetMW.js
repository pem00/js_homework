/*
    Removes the choosen bolygó from the database.
    Redirects to /overview
*/
const requireOption = require('../requireOption');

module.exports = function(objRepo) {
    return function(req, res, next) {
        if (typeof res.locals.planet === 'undefined') {
            return next();
        }

        res.locals.planet.remove(err => {
            if (err) {
                return next(err);
            }

            return res.redirect(`/overview/${res.locals.alien._id}`);
        });
    };
};