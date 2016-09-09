//Dependencias:
var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var dbOperations = require("./dbOperations.js");
var logFmt = require('logfmt');

//Definir puerto:
var server_port = process.env.PORT || 3000;

//Definir aplicación:
var app = express();

//Definir motor de templates:
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Definir middlewares:
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

//Definir carpetas estáticas a usar:
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + '/node_modules'));

//Inicializar la aplicación:
init();


//Operaciones CRUD
app.get('/db/readRecords', function(req,res){
    dbOperations.getRecords(req,res);
});
app.get('/db/addRecord', function(req,res){
    dbOperations.addRecord(req,res);
});
app.get('/db/delRecord', function(req,res){
    dbOperations.delRecord(req,res);
});
app.get('/db/createTable', function(req,res){
    dbOperations.createTable(req,res);
});
app.get('/db/dropTable', function(req,res){
    dbOperations.dropTable(req,res);
});

//Páginas:
//Inicio
app.get('/', function(req, res){
    res.redirect('index');
});

app.get('/index', function(req, res){

  res.render('index', { });

});

//Manejo de errores:
//404
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
//Desarrollo
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}
//Producción
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

//Definir Inicialización:
function init() {
  app.listen(server_port, function() {
    console.log('La aplicación está corriendo en localhost:' + server_port);
  });
}

//Exportar módulo
module.exports = app;
