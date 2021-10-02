'use strict'

//Cargar modulos de node para crear servidor
var express = require('express');

//Ejecutar express (http)
var app = express()

//Cargar ficheros rutas
var code_routes = require('./routes/codebreaker');

//Middlewares
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

// CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


//Añadir prefijos a rutas
app.use('/api', code_routes);

//Exportar modulo (Fichero actual)
module.exports = app;
