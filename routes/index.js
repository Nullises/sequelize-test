var express = require('express');
var router = express.Router();
var models = require('../server/models/index');

//Página inicial
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Crear empleados
router.post('/employees', function(req, res) {
  models.Employee.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    mobile: req.body.mobile
  }).then(function(employee) {
    res.json(employee);
  });
});

//Buscar todos los empleados
router.get('/getEmployees', function(req, res){
  models.Employee.findAll({}).then(function(getEmployees) {
    res.json(getEmployees);
  });
});

//Buscar un solo empleado
router.get('/employee/:id', function(req, res) {
  models.Employee.find({
    where: {
      id: req.params.id
    }
  }).then(function(idEmployee) {
    res.json(idEmployee);
  });
});

//Borrar un solo empleado
router.delete('/employee/:id', function(req, res) {
  models.Employee.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(deleteEmployee) {
    res.json(deleteEmployee);
  });
});

//Comprobar conexión a DB
models.sequelize.authenticate().then(function(err) {
    console.log('La conexión a Base de Datos se ha establecido correctamente');
}).catch(function (err) {
    console.log('Imposible conectarse a Base de Datos:', err);
});


module.exports = router;
