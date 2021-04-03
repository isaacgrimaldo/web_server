/**
 res.sendFile(__dirname + urlDoc) para mostar por medio de rutas contenido
 */
require('dotenv').config(); //cuando el hosting no tiene el puerto ocupado ocupar el que se nos de
const express = require('express');
var hbs = require('hbs');
const app = express();
const port  = process.env.PORT;

// congif hbs
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home' ,{
        title:'Isaac Y node', // se le puden mandar argumentos para usar como si fuera angular
    })
})

app.get('/generic' ,( req  , res )=> {
    res.render('generic');
})

app.get('/elements', (req , res) => {
    res.render('elements');
})

// uso sin  hbs
/*
app.get('/index', (req, res) => {
    res.sendFile( __dirname + '/public/index.html')
})

app.get('/generic', (req, res) => {
      res.sendFile( __dirname + '/public/generic.html' ); //para acceder a los htmls
})
*/
app.listen(port, () => {
     console.log(`servidor corriendo en el puerto ${port}`);
});