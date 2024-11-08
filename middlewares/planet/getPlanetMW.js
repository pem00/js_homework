/*
    Load one planets from the database
*/
module.exports = function(objRepo) {
    return function(req, res, next) {
        res.locals.alien = {
            _id: 'planet1',
            tipus: 'gázóriás',
            lakhatosag: 'talan',
            statusz: 'nem'
        };
        return next();
    };
};