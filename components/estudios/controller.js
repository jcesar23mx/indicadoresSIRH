const store = require('./store');

function listaHorario(numemp) {
    return new Promise((resolve, reject) => {
        console.log('=> controller')
        console.log(numemp);
        resolve(store.list(numemp));
    }) 
}


module.exports = {
    listaHorario
}