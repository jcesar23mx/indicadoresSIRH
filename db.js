const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:RH23021312@54.184.232.181:5432/sirhcobnomina')


async function connect(){
    try {
        await sequelize.authenticate();        
        console.log('Conexión establecida.');
    } catch (error) {
        console.error('No se pudo conectar', error);
    }
}

module.exports = {
    connect: connect,
    sequelize: sequelize
}
