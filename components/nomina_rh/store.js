const Nomina = require('./model');
const Empleado = require('./model');

async function listaNomina(nomemp) {

    let nomina;
    console.log(`nomemp => ${nomemp}`);
    if (nomemp === null) {
        nomina = await Nomina.findAll({
            limit: 20,
            //offset: 10,
            order: ['clavecategoria']
        });
    }
    else {
        const nombre = '%' + nomemp + '%'
        console.log(nombre);
        const { Op } = require("sequelize");
        nomina = await Nomina.findAll({
            where: {
                [Op.or]: [
                    {
                        numemp: {
                            [Op.like]: nombre
                        }
                    },
                    {
                        nombreempleado: {
                            [Op.like]: nombre
                        }
                    },
                    {
                        descplantel: {
                            [Op.like]: nombre
                        }
                    }
                ]
            },
            order: ['orden', 'clavecategoria']
        });

    }
    return nomina;
}

async function updateNomina(strnumemp, intverificado, strobservaciones) {


    const foundEmp = await Empleado.findOne({
        where: {numemp: strnumemp}
    })

    console.log('****----->>>')
    console.log(strnumemp);
    console.log(foundEmp);
    console.log('<<<-----****')
    
    foundEmp.verificado = intverificado;
    foundEmp.observaciones = strobservaciones;
    
    foundEmp.save();

}


module.exports = {
    list: listaNomina,
    updateNomina: updateNomina
}