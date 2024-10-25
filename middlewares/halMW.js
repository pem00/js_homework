/* 
    Hal easter egg, megtalálásra kirajzol el halat a épernyőre
*/
module.exports = function(objRepo) {
    return function(req, res, next) {
        //kiír egy halat ><>
            return next();
    }
}