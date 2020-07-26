const {Sequelize, DataTypes} = require('sequelize');
const db = require('../../db');

const sequelize =  db.sequelize; 

const t_estudios = sequelize.define('t_estudios', {
    numemp: {type: DataTypes.STRING, allowNull: false }, 
    desccarrera: {type: DataTypes.STRING, allowNull: false },
	descnivel: {type: DataTypes.STRING, allowNull: false },
	titulado: {type: DataTypes.STRING, allowNull: false }
,},
{
    freezeTableName: true,
    timestamps: false
})
t_estudios.removeAttribute('id');
console.log(t_estudios == sequelize.models.t_estudios);


module.exports = t_estudios;

