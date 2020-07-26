const store = require('./store');

function listAvance(ejercicio) {
    return new Promise((resolve, reject) => {
        console.log('=> controller')
        resolve(store.list(ejercicio));
    }) 
}

module.exports = {
    listAvance
}


