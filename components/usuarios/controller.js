const store = require('./store');

function listaUsuario(usuario,password) {
    return new Promise((resolve, reject) => {
        console.log('=> controller')
        resolve(store.list(usuario,password));
    }) 
}

module.exports = {
    listaUsuario
}