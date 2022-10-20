const Controller = require('./controllers/controller');
const express = require('express');
const app = express()
const port = 3000
const path = require('path');

app.set('view engine','ejs');
app.set('views', path.join(__dirname,'/views'))

//FOR req.body
app.use(express.urlencoded({ extended : true }))

app.get('/', Controller.landingPage);
app.get('/commanders', Controller.commandersList);
app.get('/troops', Controller.troopsList);
app.get('/troops/train', Controller.addTroopPage);
app.post('/troops/train', Controller.addTroop);


// CHECK CONNECTION
app.listen(3000, () => {console.log('rolling in the deep in port ', port)});