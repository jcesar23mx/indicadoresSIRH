const express = require('express');
const router = express.Router();

const controller = require('./controller');
const response = require('../../network/response');
const rutasProtegidas = require('../../config/autenticacion');


router.get('/', rutasProtegidas, function (req, res) {
  const filterMessages = req.query.ejercicio || null;
  controller.listAvance(filterMessages)
    .then((avanceList) => {
      console.log('==> Genial');
      response.success(req, res, avanceList, 201);
    })
    .catch(e => {
      console.log('==> Hubo un error');
      response.error(req, res, 'Internal error', 500, e);
    });
});

module.exports = router;


