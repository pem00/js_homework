const  mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/eeg57y');

module.exports = mongoose;