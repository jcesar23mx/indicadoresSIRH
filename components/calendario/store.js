const Calendario = require('./model');

async function listCalendario(ejercicio){
/*    return new Promise((resolve, reject) => {
        let filter = {}
        if (ejercicio) {
            filter = {
                t_ejercicio: ejercicio,
            }
        }
        console.log('=> store')
        const calendario = Model.findAll();
        console.log(calendario.every(calendario instanceof Model))
    })*/
    let calendario = await Calendario.findAll({raw: true});
    console.log(calendario);
    return calendario;

}
module.exports = {
    list: listCalendario
}