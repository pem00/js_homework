/*
    Load all bolygók from the database
*/
module.exports = function(objRepo) {
    return function(req, res, next) {
        res.locals.aliens = [
        {
            _id: "1233",
            nev: "Chipukara",
            fajta: "hüllő",
            fejlettseg: "very much",
            coloniz: "1",
            coloniz_nev: "Marsoloxod"
        },
    ]
            return next();
    }
}