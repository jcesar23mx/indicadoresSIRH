const {Sequelize, DataTypes} = require('sequelize');
const db = require('../../db');

const sequelize =  db.sequelize; 

const t_horas = sequelize.define('t_horas', {
    numemp: {type: DataTypes.STRING, allowNull: false }, 
    claveplantel: {type: DataTypes.STRING, allowNull: false },
	descplantel: {type: DataTypes.STRING, allowNull: false },
	clavemateria: {type: DataTypes.STRING, allowNull: false },
	nombremateria: {type: DataTypes.STRING, allowNull: false },
    grupo: {type: DataTypes.STRING, allowNull: false },
	tipohora: {type: DataTypes.STRING, allowNull: false },
	desccategoria: {type: DataTypes.STRING, allowNull: false },
	abrevnombramiento: {type: DataTypes.STRING, allowNull: false },
	descnombramiento: {type: DataTypes.STRING, allowNull: false },
	titular: {type: DataTypes.STRING, allowNull: false },
	cantidad: {type: DataTypes.INTEGER, allowNull: false },
	totalhoras: {type: DataTypes.INTEGER, allowNull: false },
	estudios: {type: DataTypes.STRING, allowNull: false },
	idhora: {type: DataTypes.INTEGER, allowNull: false },
	verificado: {type: DataTypes.INTEGER, allowNull: false },
    observaciones: {type: DataTypes.STRING, allowNull: false },
},
{
    freezeTableName: true,
    timestamps: false
})
t_horas.removeAttribute('id');
console.log(t_horas == sequelize.models.t_horas);


module.exports = t_horas;

