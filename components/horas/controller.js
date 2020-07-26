const store = require('./store');

function listaEstudio(numemp) {
    return new Promise((resolve, reject) => {
        console.log('=> controller')
        console.log(numemp);
        resolve(store.list(numemp));
    }) 
}


module.exports = {
    listaEstudio
}