const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:RH23021312@ec2-54-212-132-145.us-west-2.compute.amazonaws.com:5432/sirhcobnomina')


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