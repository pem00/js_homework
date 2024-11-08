const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Planet = db.model('Planet', {
    _id: String,
    fajta: String,
    lakhatosag: String,
    statusz: Number
});

module.exports = Planet;