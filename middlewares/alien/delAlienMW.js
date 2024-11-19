/*
    Removes the choosen űrlény from the database.
    Redirects to /overview
*/
const requireOption = require('../requireOption');

module.exports = function(objRepo) {
    return function(req, res, next) {
        if (typeof res.locals.alien === 'undefined') {
            return next();
        }

        res.locals.alien.remove(er => {
            if(err) {
                return next(err);
            }

            return res.redirect('/overview');
        })
    }
}