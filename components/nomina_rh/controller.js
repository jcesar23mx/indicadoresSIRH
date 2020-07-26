const store = require('./store');

function listaNomina(nomemp) {
    return new Promise((resolve, reject) => {
        console.log('=> controller')
        console.log(nomemp);
        resolve(store.list(nomemp));
    }) 
}

function updateEmpleado(numemp, verificado, observaciones) {

    return new Promise (async (resolve, reject) => {
        if (!numemp ) {
            reject('Datos inválidos');
            return false;
        }
        const result = await store.updateNomina(numemp, verificado, observaciones);
        resolve(result);

    })

}
module.exports = {
    listaNomina,
    updateEmpleado
}