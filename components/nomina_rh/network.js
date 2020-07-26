const express = require('express');
const router = express.Router();

const response = require('../../network/response');
const controller = require('./controller');
const rutasProtegidas = require('../../config/autenticacion');

router.get('/', function(req,res){
    console.log('Star network -->')
    const filternomemp = req.params.nomemp || null;

    console.log(filternomemp);

    controller.listaNomina(filternomemp)
        .then( (nominaLista) => {
            console.log('==> Genial');
            response.success(req, res, nominaLista, 201);
        })
        .catch(e => {
            console.log('==> Hubo un error');
            response.error(req,res,'Internal error', 500, e);
        })
});


router.get('/:nomemp', rutasProtegidas,  function(req,res){
    console.log('Star network -->')
    console.log(req.params.nomemp);
    const filternomemp = req.params.nomemp || "";
    controller.listaNomina(filternomemp)
        .then( (nominaLista) => {
            console.log('==> Genial');
            response.success(req, res, nominaLista, 201);
        })
        .catch(e => {
            console.log('==> Hubo un error');
            response.error(req,res,'Internal error', 500, e);
        })
})

router.patch('/:numemp', rutasProtegidas, function(req,res) {
    const numemp = req.params.numemp;
    const verificado = req.body.changes.verificado;
    const observaciones = req.body.changes.observaciones;

    controller.updateEmpleado(numemp, verificado, observaciones)
        .then( data => {
            response.success(req,res, data, 200)
        })
        .catch( e => {
            console.log('Hubo un error');
            response.error(req,res,'Internal error', 500, e);
        })
})


module.exports = router;