const express = require('express');
const router = express.Router();

const response = require('../../network/response');
const controller = require('./controller');

router.post('/', (req, res) => {
    console.log('******')

    const rec_usuario = req.body.usuario;
    const rec_constrasena = req.body.contrasena;

    console.log(rec_usuario);
    console.log(rec_constrasena);

    const payload = {
        check:  true
       };
    controller.listaUsuario(rec_usuario, rec_constrasena)
        .then( usuario => {
            console.log('*************');
            console.log(usuario[0].dataValues);
            
            console.log('*************');
            if (usuario[0].dataValues.u_numemp) {
                response.success(req, res, usuario,'200');
            }
            else {
                console.log('==> Hubo un error');
                response.error(req, res, 'Error de autenticación', 500);    
            }
        })
        .catch(e => {
            console.log('==> Hubo un error');
            response.error(req, res, '2. Internal error', 500, e);
        })
})

module.exports = router;