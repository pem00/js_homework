const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Alien = db.model('Alien', {
    _id: String,
    faj: String,
    tech: String,
    kolon_db: Number
});

module.exports = Alien;