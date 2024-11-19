const express = require('express');
const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

require('.route/index')(app);

/*
app.get('/', (req, res, next) => {
    res.render('home');
})

app.get('/overview', (req, res) => {
    const aliens = [
        { id: 1, name: 'Alien A', species: 'Reptilian', technology: 'High' },
        { id: 2, name: 'Alien B', species: 'Humanoid', technology: 'Medium' }
    ];

    res.render('overview', { aliens });
});

app.get('/add-new-alien', (req, res, next) => {
    res.send('add-new-alien');
})

app.get('/add-new-planet', (req, res, next) => {
    res.send('add-new-planet');
})

app.get('/fish', (req, res, next) => {          //ez még nem működik de amúgy tök fun lesz
    res.send('fish');
})
*/

app.listen(3000, () => {
    console.log('Running on :3000');
})

