const Estudio = require('./model');

async function listaEstudio(numemp) {

    let estudio;
    console.log(`****numemp => ${numemp}`);
    if (numemp !== null) {
        const empleado = numemp
        console.log(empleado);
        //const { Op } = require("sequelize");
        estudio = await Estudio.findAll({
            where: {
                numemp: empleado
            }
        }, {
        order: ['claveplantel','nombremateria','grupo']}
        );

    }
    return estudio;
}

module.exports = {
    list: listaEstudio
}