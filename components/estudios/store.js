const Horario = require('./model');

async function listaHorario(numemp) {

    let horario;
    console.log(`****numemp => ${numemp}`);
    if (numemp !== null) {
        const empleado = numemp
        console.log(empleado);
        //const { Op } = require("sequelize");
        horario = await Horario.findAll({
            where: {
                numemp: empleado
            }
        });

    }
    return horario;
}

module.exports = {
    list: listaHorario
}