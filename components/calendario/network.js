const express = require('express');
const router = express.Router();

const response = require('../../network/response');
const controller = require('./controller');
const rutasProtegidas = require('../../config/autenticacion');

router.get('/', rutasProtegidas, function(req,res){
    const filterMessages = req.query.ejercicio || null;
    controller.listCalendario(filterMessages)
        .then( (calendarioList) => {
            console.log('==> Genial');
            response.success(req, res, calendarioList, 201);
        })
        .catch(e => {
            console.log('==> Hubo un error');
            response.error(req,res,'Internal error', 500, e);
        })
})

module.exports = router;