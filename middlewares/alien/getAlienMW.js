/*
    Load one űrlények from teh database
*/
module.exports = function(objRepo) {
    return function(req, res, next) {
        res.locals.alien = {
            _id: 'alien1',
            faj: 'hüllő',
            tech: 'magas',
            kolon_db: '2'
        };
        return next();
    };
};