const store = require('./store');

function listCalendario(ejercicio) {
    return new Promise((resolve, reject) => {
        console.log('=> controller')
        resolve(store.list(ejercicio));
    }) 
}

module.exports = {
    listCalendario
}