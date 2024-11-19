const getAlienMW = require('../middlewares/alien/getAlienMW');
const getAllAliensMW = require('../middlewares/alien/getAllAliensMW');
const saveAlienMW = require('../middlewares/alien/saveAlienMW');
const delAlienMW = require('../middlewares/alien/delAlienMW');
const getPlanetMW = require('../middlewares/planet/getPlanetMW');
const getAllPlanetsMW = require('../middlewares/alien/getAllPlanetsMW');
const savePlanetMW = require('../middlewares/planet/savePlanetMW');
const delPlanetMW = require('../middlewares/planet/delPlanetMW');
const halMW = require('../middlewares/halMW');
const renderMW = require('../middleware/renderMW');

const AlienModel = require('../models/alien');
const PlanetModel = require('../models/planet');

module.exports = function(app) {
    const objRepo = {
        AlienModel: AlienModel,
        PlanetModel: PlanetModel
    };

    app.use(
        '/new-alien',
        saveAlienMW(objRepo),
        renderMW(objRepo, 'edit_alien')
    );

    app.use(
        '/alien-edit/:id',
        getAlienMW(objRepo),
        saveAlienMW(objRepo),
        renderMW(objRepo, 'edit_alien')
    );

    app.use(
        '/delete-alien/:id',
        getAlienMW(objRepo),
        delAlienMW(objRepo)
    );

    app.get(
        '/alien',
        getAllAliensMW(objRepo),
        renderMw(objRepo, 'overview')
    );

    app.use('/new-planet',
        savePlanetMW(objRepo)
    );

    

    app.use(
        '/', 
        getAllAlienMW(objRepo), 
        renderMW(objRepo, 'app'));

}

function routes(app) {
    const objRepo = {};

    app.get('/overview',
        getAllAliensMW(objRepo),
        getAllPlanetsMW(objRepo)
    );

    

    app.get('/planet/:id',
        getPlanetMW(objRepo)
    );

    

    

   

    app.use('/edit-planet/:id',
        getPlanetMW(objRepo),
        savePlanetMW(objRepo)
    );

   

    app.use('/delete-planet/:id',
        getPlanetMW(objRepo),
        delPlanetMW(objRepo)
    );

    app.get('/fish',
        halMW(objRepo)
    );
}

module.exports = routes;