const Avance = require('./model');

async function listAvance(ejercicio){
    let avance = await Avance.findAll({raw: true});
    //console.log(avance);
    return avance;

}
module.exports = {
    list: listAvance
}