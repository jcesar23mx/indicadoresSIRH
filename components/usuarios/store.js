const jwt = require('jsonwebtoken');

const Usuario = require('./model');
const config = require('../../config/config');

const payload = {
    check: true
};

async function listaUsuario(user, password) {
    const llave = config.llave;

    console.log(`****usuario => ${user} , ${password}`);
    if (user !== null || password !== null) {
        const u_usuario = user;
        const u_password = password;
        const { Op } = require("sequelize");
        usuario = await Usuario.findAll({
            where: {
                [Op.and]: [
                    {
                        u_user: {
                            [Op.eq]: u_usuario
                        }
                    },
                    {
                        u_pass: {
                            [Op.eq]: u_password
                        }
                    }]
            },
            attributes: ['u_perfil', 'u_name', 'u_numemp', 'u_passenc'],
        });
    }
    else {
        console.log('==> 1. Hubo un error');
    }
    console.log('......>')
    if (usuario[0].dataValues.u_numemp) {
        console.log('==> Genial');
        const token = jwt.sign(payload, llave, { expiresIn: "1 days" });
        usuario[0].dataValues.token = token
    }
    else {
        console.log('==> 2. Hubo un error');
    }
    console.log(usuario);
    return usuario;
}

module.exports = {
    list: listaUsuario
}