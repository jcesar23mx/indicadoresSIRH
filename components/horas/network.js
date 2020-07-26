const express = require('express');
const router = express.Router();

const response = require('../../network/response');
const controller = require('./controller');
const rutasProtegidas = require('../../config/autenticacion');

router.get('/:numemp', rutasProtegidas, function(req,res){
    console.log('Star network -->')
    console.log(req.params.numemp);
    const filternumemp = req.params.numemp || "";
    controller.listaEstudio(filternumemp)
        .then( nominaEstudio => {
            console.log('==> Genial');
            response.success(req, res, nominaEstudio, 201);
        })
        .catch(e => {
            console.log('==> Hubo un error');
            response.error(req,res,'Internal error', 500, e);
        })
})


module.exports = router;